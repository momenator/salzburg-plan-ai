import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { places } from "@/data/places";
import { MessageSquare } from "lucide-react";

const Plan = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlace = (placeId: string) => {
    setSelectedPlaces((prev) =>
      prev.includes(placeId)
        ? prev.filter((id) => id !== placeId)
        : [...prev, placeId]
    );
  };

  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Plan Your Trip</h1>
        <Button variant="outline" size="sm" asChild>
          <Link to="/plan/chat">
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="date-from">Travel Dates</Label>
          <Input id="date-from" type="date" placeholder="From" />
          <Input id="date-to" type="date" placeholder="To" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="accommodation">Starting Point / Accommodation (Optional)</Label>
          <Input id="accommodation" placeholder="Your hotel or address" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="group-size">Group Size (Optional)</Label>
          <Input id="group-size" type="number" placeholder="Number of people" />
        </div>

        <div className="space-y-2">
          <Label>Accessibility Requirements</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="wheelchair" />
              <label htmlFor="wheelchair" className="text-sm">
                Wheelchair accessible
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="elevator" />
              <label htmlFor="elevator" className="text-sm">
                Elevator access required
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Mode of Transport</Label>
          <RadioGroup defaultValue="public">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="public" id="public" />
              <label htmlFor="public" className="text-sm">
                Public Transport
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="taxi" id="taxi" />
              <label htmlFor="taxi" className="text-sm">
                Taxi (Car)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="private" id="private" />
              <label htmlFor="private" className="text-sm">
                Private Vehicle (Car)
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="search">Select Places to Visit</Label>
          <Input
            id="search"
            placeholder="Search places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="flex items-start space-x-3 p-3 border rounded-xl"
            >
              <Checkbox
                id={place.id}
                checked={selectedPlaces.includes(place.id)}
                onCheckedChange={() => togglePlace(place.id)}
              />
              <div className="flex-1">
                <label htmlFor={place.id} className="font-medium">
                  {place.name}
                </label>
                <p className="text-sm text-muted-foreground">
                  {place.shortDescription}
                </p>
                <div className="flex gap-4 mt-1 text-xs">
                  <span className="line-through text-muted-foreground">
                    €{place.adultPrice} adult
                  </span>
                  <span className="line-through text-muted-foreground">
                    €{place.childPrice} child
                  </span>
                  <span className="text-primary font-medium">FREE with Card</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full" size="lg" asChild>
          <Link to="/plan/list">
            View Selected Places ({selectedPlaces.length})
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Plan;
