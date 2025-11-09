import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Coffee, MapPin, Utensils, Printer } from "lucide-react";
import { MapView } from "@/components/MapView";

const PlanReview = () => {
  const [numberOfDays, setNumberOfDays] = useState(2);
  const [isFinalized, setIsFinalized] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/plan">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Your {numberOfDays}-Day Itinerary</h1>
      </div>

      <div className="mb-6 p-4 bg-card border rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Duration:</span>
          <span>{numberOfDays} Days</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Daily Hours:</span>
          <span>9:00 AM - 5:30 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">Total Attractions:</span>
          <span>{numberOfDays === 2 ? '10' : '15'} places</span>
        </div>
      </div>

      <div className="mb-6 flex gap-3">
        <Button
          variant={numberOfDays === 2 ? "default" : "outline"}
          className="flex-1"
          onClick={() => setNumberOfDays(2)}
        >
          2-Day Plan
        </Button>
        <Button
          variant={numberOfDays === 3 ? "default" : "outline"}
          className="flex-1"
          onClick={() => setNumberOfDays(3)}
        >
          3-Day Plan
        </Button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Route Map</h2>
        <div className="h-[300px]">
          <MapView
            markers={[
              { id: "1", position: { lat: 47.7950, lng: 13.0470 }, title: "Hohensalzburg Fortress" },
              { id: "2", position: { lat: 47.7979, lng: 13.0478 }, title: "Salzburg Cathedral" },
              { id: "3", position: { lat: 47.7980, lng: 13.0440 }, title: "DomQuartier" },
              { id: "4", position: { lat: 47.7990, lng: 13.0445 }, title: "Mozart's Birthplace" },
              { id: "5", position: { lat: 47.8056, lng: 13.0361 }, title: "Mirabell Palace" },
              { id: "6", position: { lat: 47.7982, lng: 13.0475 }, title: "Salzburg Museum" },
              { id: "7", position: { lat: 47.7969, lng: 13.0456 }, title: "St. Peter's Abbey" },
              { id: "8", position: { lat: 47.7622, lng: 13.0603 }, title: "Hellbrunn Palace" },
            ]}
            interactive={true}
          />
        </div>
      </div>

      {/* DAY 1 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Day 1</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">9:00 AM - 11:30 AM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Hohensalzburg Fortress</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Medieval fortress with panoramic city views
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Funicular: 5 min ride</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€16.50</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">11:30 AM - 12:30 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Lunch Break</h3>
              <p className="text-sm text-muted-foreground">
                Suggested: Stiftskeller St. Peter (traditional Austrian cuisine)
              </p>
              <p className="text-sm text-primary mt-1">Est. €20-25</p>
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
                <span className="font-bold">12:30 PM - 2:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Salzburg Cathedral</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Magnificent baroque cathedral where Mozart was baptized
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Walking: 10 minutes</span>
              </div>
              <p className="text-sm text-primary font-medium mt-1">FREE</p>
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
                <span className="font-bold">2:00 PM - 3:30 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">DomQuartier</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Museum complex connecting historic buildings
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Connected to Cathedral</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€13.00</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
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
                <span className="font-bold">3:30 PM - 4:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Coffee Break</h3>
              <p className="text-sm text-muted-foreground">
                Suggested: Café Tomaselli (historic coffeehouse)
              </p>
              <p className="text-sm text-primary mt-1">Est. €8-12</p>
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
                <span className="font-bold">4:00 PM - 5:30 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Mozart's Birthplace & Getreidegasse</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Historic museum and famous shopping street
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Walking: 5 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€14.00</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DAY 2 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Day 2</h2>
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
              <h3 className="font-bold text-lg mb-1">Mirabell Palace & Gardens</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Baroque palace with stunning ornamental gardens
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Public Transport: 10 min</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€12.00</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
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
                <span className="font-bold">11:00 AM - 12:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Salzburg Museum</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Art and cultural history museum
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Walking: 15 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€9.00</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-0.5 h-full bg-border"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">12:00 PM - 1:00 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Lunch Break</h3>
              <p className="text-sm text-muted-foreground">
                Suggested: Triangel Restaurant (modern Austrian)
              </p>
              <p className="text-sm text-primary mt-1">Est. €18-22</p>
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
                <span className="font-bold">1:00 PM - 2:30 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">St. Peter's Abbey</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ancient Benedictine monastery with stunning cemetery
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Walking: 5 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€2.00</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-bold">2:30 PM - 5:30 PM</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Hellbrunn Palace</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Renaissance villa with famous trick fountains
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-primary">Bus 25: 20 minutes</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through">€14.50</span> <span className="text-primary font-medium">FREE with Card</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DAY 3 */}
      {numberOfDays === 3 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Day 3</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-0.5 h-full bg-border"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-bold">9:00 AM - 12:00 PM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Untersberg Cable Car</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Mountain cable car with spectacular alpine views
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-primary">Bus 25: 25 minutes</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="line-through">€28.00</span> <span className="text-primary font-medium">FREE with Card</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-0.5 h-full bg-border"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                  <span className="font-bold">12:00 PM - 1:00 PM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Lunch Break</h3>
                <p className="text-sm text-muted-foreground">
                  Suggested: Bärenwirt (traditional Austrian tavern)
                </p>
                <p className="text-sm text-primary mt-1">Est. €22-28</p>
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
                  <span className="font-bold">1:00 PM - 2:30 PM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Mozart Residence</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The Mozart family's former residence on Makartplatz
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-primary">Public Transport: 15 min</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="line-through">€12.00</span> <span className="text-primary font-medium">FREE with Card</span>
                </p>
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
                  <span className="font-bold">2:30 PM - 4:00 PM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Hangar-7</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Aviation museum and contemporary art gallery
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-primary">Walking: 20 minutes</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">FREE</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-bold">4:00 PM - 5:30 PM</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Kapuzinerberg Hill</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Scenic hill with hiking trails and city views
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-primary">Public Transport: 15 min</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">FREE</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isFinalized && (
        <div className="mb-6 p-4 bg-savings border-2 border-primary rounded-2xl">
          <h3 className="font-bold text-lg mb-3">Savings Summary ({numberOfDays} Days)</h3>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between">
              <span>Attraction Tickets:</span>
              <span className="line-through text-muted-foreground">
                {numberOfDays === 2 ? '€81.00' : '€121.00'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Transport:</span>
              <span className="line-through text-muted-foreground">
                {numberOfDays === 2 ? '€16.00' : '€24.00'}
              </span>
            </div>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-primary">
            <span>Total Savings:</span>
            <span>{numberOfDays === 2 ? '€97.00' : '€145.00'}</span>
          </div>
          <p className="text-sm text-foreground mt-2">
            All attractions and transport are <span className="font-bold text-primary">FREE</span> with Salzburg Card!
          </p>
        </div>
      )}

      {!isFinalized && (
        <Button
          className="w-full mb-3"
          size="lg"
          onClick={() => setIsFinalized(true)}
        >
          Finalize Itinerary
        </Button>
      )}

      {isFinalized && (
        <Button
          className="w-full mb-3"
          size="lg"
          onClick={handlePrint}
        >
          <Printer className="h-4 w-4 mr-2" />
          Print Page
        </Button>
      )}

      {!isFinalized && (
        <Button asChild className="w-full mb-3" size="lg" variant="outline">
          <Link to="/salzburg-card/buy">Save Money with Salzburg Card</Link>
        </Button>
      )}

      <Button asChild variant="outline" className="w-full" size="lg">
        <Link to="/plan">Edit Your Plan</Link>
      </Button>
    </div>
  );
};

export default PlanReview;
