
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard, LogOut, UserCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const ProfileCard = () => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ name: string | null, email: string | null }>({
    name: null,
    email: null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user?.id) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('name, email')
        .eq('id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile({
        name: data.name || session.user.email?.split('@')[0] || 'User',
        email: data.email || session.user.email || '',
      });
    };

    fetchProfile();
  }, [session]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success("Successfully logged out");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message || "Error logging out");
    }
  };

  return (
    <Card className="glass-card p-4">
      <div className="flex items-center gap-3 mb-3">
        <UserCircle className="h-10 w-10 text-primary" />
        <div className="flex-1">
          <h3 className="font-medium">{profile.name}</h3>
          <p className="text-sm text-muted-foreground">{profile.email}</p>
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
          className="w-full justify-start"
          size="sm"
          asChild
        >
          <Link to="/support">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
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
