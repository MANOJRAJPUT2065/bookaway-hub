import heroImage from "@/assets/hero-resort.jpg";
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <header>
      <section
        ref={ref}
        onMouseMove={onMove}
        className="relative min-h-[70vh] w-full overflow-hidden rounded-b-lg shadow-elegant"
      >
        <img
          src={heroImage}
          alt="Luxury beachside resort with infinity pool — hotel booking hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/70"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.25), transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Book your next stay with confidence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Discover great deals on hotels, resorts, and unique stays around the world.
          </p>
          <div className="w-full max-w-4xl">
            <SearchBar />
          </div>
          <div className="mt-6">
            <Button variant="hero" size="lg">Explore Top Deals</Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
