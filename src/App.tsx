import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";
import MobileLayout from "./components/MobileLayout";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import PlanList from "./pages/PlanList";
import PlanChat from "./pages/PlanChat";
import PlanReview from "./pages/PlanReview";
import SalzburgCard from "./pages/SalzburgCard";
import SalzburgCardBuy from "./pages/SalzburgCardBuy";
import SalzburgCardPay from "./pages/SalzburgCardPay";
import Places from "./pages/Places";
import PlaceDetail from "./pages/PlaceDetail";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MobileLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan/list" element={<PlanList />} />
              <Route path="/plan/chat" element={<PlanChat />} />
              <Route path="/plan/review" element={<PlanReview />} />
              <Route path="/salzburg-card" element={<SalzburgCard />} />
              <Route path="/salzburg-card/buy" element={<SalzburgCardBuy />} />
              <Route path="/salzburg-card/buy/pay" element={<SalzburgCardPay />} />
              <Route path="/places" element={<Places />} />
              <Route path="/place/:slug" element={<PlaceDetail />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </MobileLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </APIProvider>
);

export default App;
