import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, CreditCard, MapPin, User } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/plan", icon: Calendar, label: "Plan" },
  { path: "/salzburg-card", icon: CreditCard, label: "Card" },
  { path: "/places", icon: MapPin, label: "Places" },
  { path: "/account", icon: User, label: "Account" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-navbar border-t border-white/10 z-50">
      <div className="max-w-mobile mx-auto">
        <div className="flex items-center justify-around h-16">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                  isActive ? "text-navbar-active" : "text-navbar-foreground/70"
                }`}
              >
                <Icon className={`h-6 w-6 mb-1 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
