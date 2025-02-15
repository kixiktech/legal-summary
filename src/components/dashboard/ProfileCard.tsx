
import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfileCard = () => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  return (
    <Card className="glass-card p-4">
      <div className="flex items-center gap-3 mb-3">
        <UserCircle className="h-10 w-10 text-primary" />
        <div className="flex-1">
          <h3 className="font-medium">John Doe</h3>
          <p className="text-sm text-muted-foreground">lawyer@example.com</p>
        </div>
      </div>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start"
          size="sm"
          asChild
        >
          <Link to="/payment">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment Settings
          </Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start text-destructive hover:text-destructive"
          size="sm"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
