import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { places } from "@/data/places";
import { MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapView } from "@/components/MapView";

const Plan = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [numberOfDays, setNumberOfDays] = useState(2);
  const [startDate, setStartDate] = useState("");

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
          <Label htmlFor="start-date">Starting Date</Label>
          <Input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <Label>Number of Days</Label>
          <div className="flex gap-3">
            <Button
              variant={numberOfDays === 1 ? "default" : "outline"}
              className="flex-1"
              onClick={() => setNumberOfDays(1)}
            >
              1 Day
            </Button>
            <Button
              variant={numberOfDays === 2 ? "default" : "outline"}
              className="flex-1"
              onClick={() => setNumberOfDays(2)}
            >
              2 Days
            </Button>
            <Button
              variant={numberOfDays === 3 ? "default" : "outline"}
              className="flex-1"
              onClick={() => setNumberOfDays(3)}
            >
              3 Days
            </Button>
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
          <Label htmlFor="accommodation">Starting Point / Accommodation (Optional)</Label>
          <Input id="accommodation" placeholder="Your hotel or address" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="group-size">Group Size (Optional)</Label>
          <Input id="group-size" type="number" placeholder="Number of people" />
        </div>

        <div className="space-y-2">
          <Label>Accessibility Requirements (Optional)</Label>
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

        <Tabs defaultValue="list" className="w-full" onValueChange={(v) => setViewMode(v as "list" | "map")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-2 mt-4">
            <div className="space-y-2 mb-4">
              <Label htmlFor="search">Select Places to Visit</Label>
              <Input
                id="search"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

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
          </TabsContent>
          
          <TabsContent value="map" className="mt-4">
            <div className="h-[400px] mb-4">
              <MapView
                markers={places
                  .filter(place => selectedPlaces.includes(place.id))
                  .map(place => ({
                    id: place.id,
                    position: { lat: place.lat, lng: place.lng },
                    title: place.name
                  }))}
                interactive={true}
              />
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Selected: {selectedPlaces.length} place{selectedPlaces.length !== 1 ? 's' : ''}
            </p>
            {selectedPlaces.length > 0 && (
              <div className="space-y-2">
                {places
                  .filter(place => selectedPlaces.includes(place.id))
                  .map(place => (
                    <div key={place.id} className="flex items-center justify-between p-3 border rounded-xl">
                      <span className="font-medium">{place.name}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => togglePlace(place.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Button className="w-full" size="lg" asChild>
          <Link to="/plan/list" state={{ selectedPlaces, selectedPlaceNames: places.filter(p => selectedPlaces.includes(p.id)).map(p => p.name) }}>
            View Selected Places ({selectedPlaces.length})
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Plan;
