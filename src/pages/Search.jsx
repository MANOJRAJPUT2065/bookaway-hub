import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/auth/AuthProvider";
import { addBookingForUser } from "@/backend/bookings";

const listings = [
  {
    id: "1",
    title: "Azure Bay Resort",
    location: "Maldives",
    price: 289,
    rating: 4.7,
    image: "/src/assets/destination-beach.jpg",
  },
  {
    id: "2",
    title: "Alpine Glow Lodge",
    location: "Swiss Alps",
    price: 199,
    rating: 4.6,
    image: "/src/assets/destination-mountain.jpg",
  },
  {
    id: "3",
    title: "Urban Chic Boutique",
    location: "Barcelona",
    price: 149,
    rating: 4.5,
    image: "/src/assets/destination-city.jpg",
  },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
  const query = useQuery();
  const { user } = useAuth();
  const navigate = useNavigate();
  const destination = query.get("destination")?.toLowerCase() ?? "";
  const guests = query.get("guests") ?? "1";
  const from = query.get("from") ?? "";
  const to = query.get("to") ?? "";

  const filtered = useMemo(() => {
    if (!destination) return listings;
    return listings.filter(
      (l) => l.title.toLowerCase().includes(destination) || l.location.toLowerCase().includes(destination)
    );
  }, [destination]);

  const bookNow = (item) => {
    if (!user) {
      toast({ title: "Sign in required", description: "Please log in to book." });
      navigate("/login");
      return;
    }
    addBookingForUser(user.id, {
      title: item.title,
      location: item.location,
      from,
      to,
      guests,
      createdAt: new Date().toISOString(),
    });
    toast({ title: "Booked", description: `${item.title} reserved.` });
    navigate("/bookings");
  };

  return (
    <main className="container mx-auto px-6 py-10">
      <Helmet>
        <title>Search stays — BookAway Hub</title>
        <meta name="description" content="Browse available hotels, resorts, and stays based on your search." />
        <link rel="canonical" href="/search" />
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Search results</h1>
      <p className="text-muted-foreground mb-6">{filtered.length} place(s) for {guests} {guests === "1" ? "guest" : "guests"}</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <article key={item.id} className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-elegant transition-all">
            <img src={item.image} alt={`${item.title} in ${item.location}`} className="h-48 w-full object-cover" loading="lazy" />
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm">${""}{item.price}/night</span>
                <span className="text-sm" aria-label={`Rating ${item.rating} out of 5`}>⭐ {item.rating}</span>
              </div>
              <div className="pt-2">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => bookNow(item)}
                >
                  Book now
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Search;
