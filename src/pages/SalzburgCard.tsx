import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const SalzburgCard = () => {
  const activeCard = {
    type: "48 Hour Adult",
    expiresAt: new Date(Date.now() + 15 * 60 * 60 * 1000), // 15 hours from now
  };

  const timeRemaining = () => {
    const diff = activeCard.expiresAt.getTime() - Date.now();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="pb-20 pt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Salzburg Card</h1>

      <Card className="p-6 mb-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Active Card</h2>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <Clock className="h-6 w-6" />
          </div>
        </div>
        <p className="text-xl mb-2">{activeCard.type}</p>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">{timeRemaining()}</span>
          <span className="text-primary-foreground/80">remaining</span>
        </div>
      </Card>

      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <Card className="p-4">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Free admission to 30+ attractions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Unlimited public transport</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Special discounts at restaurants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>One-time Mönchsberg lift ride</span>
            </li>
          </ul>
        </Card>
      </div>

      <Button asChild className="w-full" size="lg">
        <Link to="/salzburg-card/buy">Buy Another Card</Link>
      </Button>
    </div>
  );
};

export default SalzburgCard;
