import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlanChat = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanTrip = async () => {
    if (!prompt.trim()) return;
    
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
        <h1 className="text-3xl font-bold">Chat Mode</h1>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          Describe your perfect trip in your own words. Our AI will create a personalized itinerary just for you!
        </p>

        <Textarea
          placeholder="Example: I want to visit historical sites and museums. I'm interested in Mozart and baroque architecture. I'll be traveling with my family including two kids aged 8 and 12. We prefer places that are wheelchair accessible..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={10}
          className="resize-none"
        />

        <Button
          className="w-full"
          size="lg"
          onClick={handlePlanTrip}
          disabled={!prompt.trim()}
        >
          Plan My Trip
        </Button>
      </div>
    </div>
  );
};

export default PlanChat;
