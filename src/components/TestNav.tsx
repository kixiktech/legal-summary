
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TestNav = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl p-4 glass-card rounded-lg animate-fade-up mt-8 mx-auto">
      <h3 className="text-sm font-medium mb-4">Testing Navigation (Dev Only)</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          Go to Home
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
          Go to Login
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/signup")}>
          Go to Signup
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/upload")}>
          Go to Upload
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/processing")}>
          Go to Processing
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/payment")}>
          Go to Payment
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default TestNav;
