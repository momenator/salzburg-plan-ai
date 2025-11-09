import { Link } from "react-router-dom";
import { places } from "@/data/places";
import { Card } from "@/components/ui/card";

const Places = () => {
  return (
    <div className="pb-20 pt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">All Places</h1>
      
      <div className="space-y-4">
        {places.map((place) => (
          <Link key={place.id} to={`/place/${place.slug}`}>
            <Card className="overflow-hidden transition-transform duration-200 active:scale-98">
              <div className="flex gap-4">
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
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Places;
