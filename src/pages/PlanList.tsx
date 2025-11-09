import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlanList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanTrip = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      navigate("/plan/review");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen pb-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Planning Your Trip</h2>
          <p className="text-muted-foreground">
            Our AI is creating the perfect itinerary for you...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/plan">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Selected Places</h1>
      </div>

      <div className="space-y-4 mb-6">
        <p className="text-muted-foreground">
          You have selected 3 places to visit. Review your selections and click "Plan My Trip" to generate your personalized itinerary.
        </p>
      </div>

      <Button className="w-full" size="lg" onClick={handlePlanTrip}>
        Plan My Trip
      </Button>
    </div>
  );
};

export default PlanList;
