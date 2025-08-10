import beach from "@/assets/destination-beach.jpg";
import mountain from "@/assets/destination-mountain.jpg";
import city from "@/assets/destination-city.jpg";

const items = [
  {
    title: "Tropical Escapes",
    image: beach,
    alt: "Tropical beachfront resort with turquoise water and palm trees",
    blurb: "Sun, sand, and savings at top-rated beach resorts.",
  },
  {
    title: "Mountain Retreats",
    image: mountain,
    alt: "Cozy luxury mountain lodge with pine forest and snowy peaks",
    blurb: "Cozy cabins and lodges with breathtaking views.",
  },
  {
    title: "City Boutique",
    image: city,
    alt: "Modern boutique city hotel exterior at sunset",
    blurb: "Stylish stays in the heart of the action.",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-elegant transition-all">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={`${item.alt} — BookAway Hub featured destination`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
