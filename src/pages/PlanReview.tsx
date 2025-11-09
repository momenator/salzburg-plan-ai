import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Coffee, MapPin } from "lucide-react";
import { MapView } from "@/components/MapView";

const PlanReview = () => {
  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/plan">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Your Itinerary</h1>
      </div>

      <div className="mb-6 p-4 bg-card border rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Start Time:</span>
          <span>9:00 AM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">End Time:</span>
          <span>6:00 PM</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Route Map</h2>
        <div className="h-[300px]">
          <MapView
            markers={[
              { id: "1", position: { lat: 47.7950, lng: 13.0470 }, title: "Hohensalzburg Fortress" },
              { id: "2", position: { lat: 47.8080, lng: 13.0440 }, title: "Mozart's Birthplace" },
              { id: "3", position: { lat: 47.8095, lng: 13.0550 }, title: "Your Location" },
            ]}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Timeline</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">9:00 AM - 11:00 AM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Hohensalzburg Fortress</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Medieval fortress with panoramic views
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Public Transport: Bus 25</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Coffee className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">11:00 AM - 12:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Café Break</h3>
              <p className="text-sm text-muted-foreground">
                Suggested: Café Tomaselli (historic coffeehouse)
              </p>
              <p className="text-sm text-primary mt-1">Est. €15-20</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">12:00 PM - 2:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Mozart's Birthplace</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Historic museum on Getreidegasse
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Walking: 10 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-savings border-2 border-primary rounded-2xl">
        <h3 className="font-bold text-lg mb-3">Cost Summary</h3>
        <div className="space-y-2 mb-3">
          <div className="flex justify-between">
            <span>Attraction Tickets:</span>
            <span className="line-through text-muted-foreground">€30.50</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Meals:</span>
            <span>€35.00</span>
          </div>
          <div className="flex justify-between">
            <span>Transport:</span>
            <span className="line-through text-muted-foreground">€8.00</span>
          </div>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total:</span>
          <span>€35.00</span>
        </div>
        <p className="text-sm text-primary mt-2">
          Save €38.50 with Salzburg Card!
        </p>
      </div>

      <Button asChild className="w-full mb-3" size="lg">
        <Link to="/salzburg-card/buy">Save Money with Salzburg Card</Link>
      </Button>

      <Button asChild variant="outline" className="w-full" size="lg">
        <Link to="/plan">Edit Your Plan</Link>
      </Button>
    </div>
  );
};

export default PlanReview;
