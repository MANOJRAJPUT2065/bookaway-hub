import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

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

// Dummy bookings storage (replace with your backend logic)
const bookingsStorage = [];

const Search = () => {
  const query = useQuery();
  const navigate = useNavigate();

  // Simulated user (null means not logged in)
  const user = { id: "dummy-user-id" }; // Replace with null to simulate no login

  const destination = query.get("destination")?.toLowerCase() ?? "";
  const guests = query.get("guests") ?? "1";
  const from = query.get("from") ?? "";
  const to = query.get("to") ?? "";

  const filtered = useMemo(() => {
    if (!destination) return listings;
    return listings.filter(
      (l) =>
        l.title.toLowerCase().includes(destination) ||
        l.location.toLowerCase().includes(destination)
    );
  }, [destination]);

  const bookNow = (item) => {
    if (!user) {
      alert("Please log in to book.");
      navigate("/login");
      return;
    }
    // Simulate booking addition
    bookingsStorage.push({
      userId: user.id,
      title: item.title,
      location: item.location,
      from,
      to,
      guests,
      createdAt: new Date().toISOString(),
    });
    alert(`Booked ${item.title} successfully.`);
    navigate("/bookings");
  };

  return (
    <main style={{ maxWidth: 960, margin: "auto", padding: "1rem" }}>
      <Helmet>
        <title>Search stays — BookAway Hub</title>
        <meta
          name="description"
          content="Browse available hotels, resorts, and stays based on your search."
        />
        <link rel="canonical" href="/search" />
      </Helmet>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Search results
      </h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        {filtered.length} place(s) for {guests} {guests === "1" ? "guest" : "guests"}
      </p>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((item) => (
          <article
            key={item.id}
            style={{
              borderRadius: 12,
              border: "1px solid #ddd",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={item.image}
              alt={`${item.title} in ${item.location}`}
              style={{ height: 180, width: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <div style={{ padding: 16, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: 6 }}>
                {item.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: 8 }}>{item.location}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.9rem",
                  marginBottom: 12,
                }}
              >
                <span>${item.price}/night</span>
                <span aria-label={`Rating ${item.rating} out of 5`}>⭐ {item.rating}</span>
              </div>
              <button
                onClick={() => bookNow(item)}
                style={{
                  marginTop: "auto",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Book now
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Search;
