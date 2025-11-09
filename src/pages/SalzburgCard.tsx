import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, QrCode, Sparkles, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const SalzburgCard = () => {
  const [expiresAt] = useState(() => new Date(Date.now() + 15 * 60 * 60 * 1000)); // 15 hours from now
  const [timeRemaining, setTimeRemaining] = useState({ hours: 15, minutes: 0 });

  const activeCard = {
    type: "48 Hour Adult",
    expiresAt,
    cardNumber: "SZB12345678",
    qrCode: "SALZBURG-CARD-48-HOUR-ADULT-12345678"
  };

  useEffect(() => {
    const updateTimer = () => {
      const diff = activeCard.expiresAt.getTime() - Date.now();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeRemaining({ hours, minutes });
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [activeCard.expiresAt]);

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
          <span className="text-3xl font-bold">{timeRemaining.hours}h {timeRemaining.minutes}m</span>
          <span className="text-primary-foreground/80">remaining</span>
        </div>
      </Card>

      {/* QR Code Card */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <QrCode className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Your Digital Card</h2>
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
        </div>

        <Card className="p-0 overflow-hidden border-4 border-primary shadow-xl">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs opacity-80">SALZBURG CARD</p>
                <p className="text-lg font-bold">{activeCard.type}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-80">VALID UNTIL</p>
                <p className="text-sm font-bold">
                  {activeCard.expiresAt.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white p-8 flex flex-col items-center">
            <div className="bg-primary/5 p-6 rounded-2xl border-4 border-dashed border-primary/30 mb-4 animate-pulse">
              <QRCode
                value={activeCard.qrCode}
                size={200}
                level="H"
                className="shadow-lg"
              />
            </div>

            <div className="text-center space-y-2">
              <p className="font-bold text-lg text-foreground">Scan at Attractions</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Show this QR code at any participating attraction or transport station for instant access
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 border-t-2 border-primary/20">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Card #{activeCard.cardNumber}</span>
              <span className="font-bold text-primary">✓ ACTIVE</span>
            </div>
          </div>
        </Card>

        <div className="mt-3 p-3 bg-accent/50 rounded-lg border border-accent">
          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
            💡 <span className="font-medium">Tip:</span> Get direct access to your card from the Card tab <CreditCard className="h-3 w-3 inline" />
          </p>
        </div>
      </div>

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
