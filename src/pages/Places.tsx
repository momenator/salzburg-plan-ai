import { useState } from "react";
import { Link } from "react-router-dom";
import { places } from "@/data/places";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";

const Places = () => {
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const [favoritePlaces, setFavoritePlaces] = useState<string[]>([]);

  const toggleVisited = (placeId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisitedPlaces((prev) =>
      prev.includes(placeId)
        ? prev.filter((id) => id !== placeId)
        : [...prev, placeId]
    );
  };

  const toggleFavorite = (placeId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavoritePlaces((prev) =>
      prev.includes(placeId)
        ? prev.filter((id) => id !== placeId)
        : [...prev, placeId]
    );
  };

  return (
    <div className="pb-20 pt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">All Places</h1>

      <div className="space-y-6">
        {places.map((place) => (
          <Card key={place.id} className="overflow-hidden">
            <Link to={`/place/${place.slug}`}>
              <div className="flex gap-4 transition-opacity duration-200 active:opacity-70">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="flex-1 p-4 pr-2">
                  <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {place.shortDescription}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">€{place.adultPrice}</span>
                    <span className="text-xs text-muted-foreground">adult</span>
                    <span className="text-xs px-2 py-1 bg-savings text-primary rounded-full font-medium">
                      FREE with Card
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex gap-2 px-4 pb-4 pt-3 border-t mt-4">
              <Button
                variant={visitedPlaces.includes(place.id) ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={(e) => toggleVisited(place.id, e)}
              >
                <Check className="h-4 w-4 mr-2" />
                {visitedPlaces.includes(place.id) ? "Visited" : "Mark Visited"}
              </Button>
              <Button
                variant={favoritePlaces.includes(place.id) ? "default" : "outline"}
                size="sm"
                className="flex-1"
                onClick={(e) => toggleFavorite(place.id, e)}
              >
                <Heart className={`h-4 w-4 mr-2 ${favoritePlaces.includes(place.id) ? 'fill-current' : ''}`} />
                {favoritePlaces.includes(place.id) ? "Favorited" : "Favorite"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Places;
