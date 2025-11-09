import { useParams, Link } from "react-router-dom";
import { places } from "@/data/places";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Accessibility, MapPin } from "lucide-react";

const PlaceDetail = () => {
  const { slug } = useParams();
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    return (
      <div className="pb-20 pt-6 px-4">
        <h1 className="text-2xl font-bold">Place not found</h1>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-64 object-cover"
        />
        <Link
          to="/places"
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </div>

      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
        <p className="text-muted-foreground mb-4">{place.category}</p>

        <div className="bg-savings border-2 border-primary rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Regular Price:</span>
            <div className="text-right">
              <div className="line-through text-muted-foreground">€{place.adultPrice} adult</div>
              <div className="line-through text-muted-foreground">€{place.childPrice} child</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-primary text-xl">With Salzburg Card:</span>
            <span className="font-bold text-primary text-2xl">FREE</span>
          </div>
        </div>

        <Button asChild className="w-full mb-6" size="lg">
          <Link to="/salzburg-card/buy">Buy Salzburg Card</Link>
        </Button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">About</h2>
            <p className="text-foreground leading-relaxed">{place.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Opening Hours
            </h3>
            <p className="text-foreground">{place.openingHours}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-primary" />
              Accessibility
            </h3>
            <p className="text-foreground">{place.accessibility}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location
            </h3>
            <Button variant="outline" className="w-full" asChild>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(place.name + " Salzburg")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
