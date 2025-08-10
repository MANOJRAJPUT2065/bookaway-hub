import heroImage from '../../assets/hero-resort.jpg';
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <header>
      <section className="relative min-h-[70vh] w-full overflow-hidden rounded-b-lg shadow-lg">
        <img
          src={heroImage}
          alt="Luxury beachside resort with infinity pool — hotel booking hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Book your next stay with confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Discover great deals on hotels, resorts, and unique stays around the world.
          </p>
          <div className="w-full max-w-4xl">
            <SearchBar />
          </div>
          {/* Removed Button */}
        </div>
      </section>
    </header>
  );
};

export default Hero;
  