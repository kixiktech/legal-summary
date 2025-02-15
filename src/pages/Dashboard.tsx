
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SummaryCard from "@/components/dashboard/SummaryCard";
import EmptyState from "@/components/dashboard/EmptyState";
import ProfileCard from "@/components/dashboard/ProfileCard";
import type { Summary } from "@/types/dashboard";

// Mock data - replace with actual API call
const mockSummaries: Summary[] = [
  {
    id: "1",
    fileName: "Smith vs Johnson Deposition.pdf",
    uploadDate: "2024-02-20T14:30:00Z",
    status: "completed",
    downloadUrl: "#",
    pageCount: 45,
  },
  {
    id: "2",
    fileName: "Brown Case Testimony.pdf",
    uploadDate: "2024-02-20T10:15:00Z",
    status: "completed",
    downloadUrl: "#",
    pageCount: 32,
  },
  {
    id: "3",
    fileName: "Wilson Investigation.pdf",
    uploadDate: "2024-02-19T16:45:00Z",
    status: "completed",
    downloadUrl: "#",
    pageCount: 78,
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [summaries] = useState<Summary[]>(mockSummaries);
  const [activeFilter, setActiveFilter] = useState<"recent" | "all">("recent");

  const filteredSummaries = summaries
    .filter((summary) =>
      summary.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((summary) => {
      if (activeFilter === "recent") {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return new Date(summary.uploadDate) >= thirtyDaysAgo;
      }
      return true;
    });

  const latestSummary = summaries[0]; // Assuming summaries are sorted by date
  const handleDownload = (summary: Summary) => {
    console.log("Downloading summary:", summary.id);
    // Implement actual download logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4 md:py-8 px-4 md:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">My Summaries</h1>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/upload">
                  <Plus className="mr-2 h-4 w-4" />
                  New Summary
                </Link>
              </Button>
            </div>

            {/* Latest Summary Section */}
            {latestSummary && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Latest Summary</h2>
                  <span className="text-sm text-muted-foreground">Just uploaded</span>
                </div>
                <SummaryCard
                  key={latestSummary.id}
                  summary={latestSummary}
                  onDownload={handleDownload}
                />
              </div>
            )}

            {/* Filter Controls */}
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
          </div>

          {/* Profile Card - Hidden on mobile */}
          <div className="hidden md:block w-72">
            <ProfileCard />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 pb-20 md:pb-0">
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

        {/* Mobile Profile Button */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/80 backdrop-blur-lg border-t border-border p-4">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
