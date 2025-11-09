import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CardOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  ageGroup: string;
}

const cardOptions: CardOption[] = [
  { id: "24h-child", name: "24 Hour Card", price: 17, duration: "24h", ageGroup: "Child (6-15)" },
  { id: "24h-adult", name: "24 Hour Card", price: 33, duration: "24h", ageGroup: "Adult" },
  { id: "48h-child", name: "48 Hour Card", price: 25, duration: "48h", ageGroup: "Child (6-15)" },
  { id: "48h-adult", name: "48 Hour Card", price: 49, duration: "48h", ageGroup: "Adult" },
  { id: "72h-child", name: "72 Hour Card", price: 29, duration: "72h", ageGroup: "Child (6-15)" },
  { id: "72h-adult", name: "72 Hour Card", price: 59, duration: "72h", ageGroup: "Adult" },
];

const SalzburgCardBuy = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(cardOptions.map((card) => [card.id, 0]))
  );

  const updateQuantity = (cardId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [cardId]: Math.max(0, (prev[cardId] || 0) + delta),
    }));
  };

  const totalAmount = cardOptions.reduce(
    (sum, card) => sum + card.price * (quantities[card.id] || 0),
    0
  );

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/salzburg-card">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Buy Salzburg Card</h1>
      </div>

      <div className="space-y-3 mb-6">
        {cardOptions.map((card) => (
          <Card key={card.id} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{card.name}</h3>
                <p className="text-sm text-muted-foreground">{card.ageGroup}</p>
                <p className="font-bold text-primary mt-1">€{card.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => updateQuantity(card.id, -1)}
                  disabled={quantities[card.id] === 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantities[card.id]}
                  readOnly
                  className="w-16 text-center"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => updateQuantity(card.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 mb-6 bg-savings border-2 border-primary">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">Total Items:</span>
          <span className="text-xl">{totalItems}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl">Total Amount:</span>
          <span className="text-3xl font-bold text-primary">€{totalAmount.toFixed(2)}</span>
        </div>
      </Card>

      <Button
        className="w-full"
        size="lg"
        disabled={totalItems === 0}
        onClick={() => navigate("/salzburg-card/buy/pay")}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

export default SalzburgCardBuy;
