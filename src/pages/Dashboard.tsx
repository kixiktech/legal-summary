
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SummaryCard from "@/components/dashboard/SummaryCard";
import EmptyState from "@/components/dashboard/EmptyState";
import ProfileCard from "@/components/dashboard/ProfileCard";
import type { Summary } from "@/types/dashboard";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import TestNav from "@/components/TestNav";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [activeFilter, setActiveFilter] = useState<"recent" | "all">("recent");
  const { session } = useAuth();

  useEffect(() => {
    const fetchSummaries = async () => {
      if (!session?.user?.id) return;

      const { data, error } = await supabase
        .from('summaries')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching summaries:', error);
        return;
      }

      setSummaries(data || []);
    };

    fetchSummaries();
  }, [session]);

  const filteredSummaries = summaries
    .filter((summary) =>
      summary.file_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((summary) => {
      if (activeFilter === "recent") {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return new Date(summary.created_at) >= thirtyDaysAgo;
      }
      return true;
    });

  const latestSummary = summaries[0];
  const handleDownload = async (summary: Summary) => {
    try {
      if (!summary.original_file_path) {
        throw new Error("No file path found");
      }

      const { data, error } = await supabase.storage
        .from('legal_docs')
        .download(summary.original_file_path);

      if (error) throw error;

      // Create a download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = summary.file_name;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: any) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4 md:py-8 px-4 md:px-8">
        <Tabs defaultValue="summaries" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="summaries">Summaries</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <Button asChild className="w-full sm:w-auto">
              <Link to="/upload">
                <Plus className="mr-2 h-4 w-4" />
                New Summary
              </Link>
            </Button>
          </div>

          <TabsContent value="summaries" className="space-y-6">
            {latestSummary && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Latest Summary</h2>
                  <span className="text-sm text-muted-foreground">Just uploaded</span>
                </div>
                <SummaryCard
                  summary={latestSummary}
                  onDownload={handleDownload}
                />
              </div>
            )}

            {summaries.length > 1 && (
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search summaries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-card/50"
                  />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    variant={activeFilter === "recent" ? "default" : "outline"}
                    size="sm"
                    className="flex-1 sm:flex-none"
                    onClick={() => setActiveFilter("recent")}
                  >
                    Recent
                  </Button>
                  <Button
                    variant={activeFilter === "all" ? "default" : "outline"}
                    size="sm"
                    className="flex-1 sm:flex-none"
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {summaries.length <= 1 ? (
                <EmptyState />
              ) : filteredSummaries.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No summaries found matching your search.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">
                      {activeFilter === "recent" ? "Recent Summaries" : "All Summaries"}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {filteredSummaries.length} {filteredSummaries.length === 1 ? "summary" : "summaries"}
                    </span>
                  </div>
                  {filteredSummaries.slice(1).map((summary) => (
                    <SummaryCard
                      key={summary.id}
                      summary={summary}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="max-w-md mx-auto">
            <ProfileCard />
          </TabsContent>
        </Tabs>
        <TestNav />
      </div>
    </div>
  );
};

export default Dashboard;
