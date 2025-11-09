import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SalzburgCardPay = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Your Salzburg Card has been activated.",
      });
      navigate("/salzburg-card");
    }, 2000);
  };

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center min-h-screen pb-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Processing Payment</h2>
          <p className="text-muted-foreground">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 pt-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/salzburg-card/buy">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Payment</h1>
      </div>

      <form onSubmit={handlePayment} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            id="card-number"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>

        <div className="p-4 bg-savings border-2 border-primary rounded-xl">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total Amount:</span>
            <span className="text-2xl font-bold text-primary">€49.00</span>
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default SalzburgCardPay;
