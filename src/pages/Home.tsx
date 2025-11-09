import { Link } from "react-router-dom";
import { places } from "@/data/places";

const Home = () => {
  return (
    <div className="pb-20 pt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Most Popular</h1>
      
      <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
        {places.map((place) => (
          <Link
            key={place.id}
            to={`/place/${place.slug}`}
            className="flex-none w-64 snap-start"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-200 active:scale-95">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">{place.name}</h3>
                <p className="text-white/90 text-sm">{place.shortDescription}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-white/90 text-sm">€{place.adultPrice}</span>
                  <span className="text-white/70 text-xs">• FREE with Card</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Plan Your Trip</h2>
        <Link
          to="/plan"
          className="block bg-primary text-primary-foreground rounded-2xl p-6 shadow-md transition-transform duration-200 active:scale-95"
        >
          <h3 className="font-bold text-xl mb-2">Start Planning</h3>
          <p className="text-primary-foreground/90">
            Create your perfect itinerary with AI assistance
          </p>
        </Link>
      </div>

      <div className="mt-6">
        <Link
          to="/salzburg-card"
          className="block bg-card border-2 border-primary rounded-2xl p-6 shadow-md transition-transform duration-200 active:scale-95"
        >
          <h3 className="font-bold text-xl mb-2 text-primary">Salzburg Card</h3>
          <p className="text-muted-foreground">
            Free admission to 30+ attractions and unlimited public transport
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
