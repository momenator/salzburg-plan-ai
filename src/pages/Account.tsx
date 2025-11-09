import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Heart, LogOut } from "lucide-react";

const Account = () => {
  return (
    <div className="pb-20 pt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Account</h1>

      <Card className="p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-xl">John Doe</h2>
            <p className="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          Edit Profile
        </Button>
      </Card>

      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-bold">Preferences</h2>
        
        <Card className="p-4">
          <h3 className="font-bold mb-3">Accessibility</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Wheelchair Accessible
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Elevator Access Required
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-bold mb-3">Age Group</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Adults (2)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Children (0)
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-bold mb-3">Transport Preference</h3>
          <Button variant="outline" className="w-full justify-start">
            Public Transport
          </Button>
        </Card>
      </div>

      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start gap-3">
          <Settings className="h-5 w-5" />
          Settings
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <Bell className="h-5 w-5" />
          Notifications
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <Heart className="h-5 w-5" />
          Saved Places
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 text-destructive">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Account;
