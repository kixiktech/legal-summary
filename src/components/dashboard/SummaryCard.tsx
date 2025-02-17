
import React from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database } from "@/integrations/supabase/types";

type Summary = Database['public']['Tables']['summaries']['Row'];

interface SummaryCardProps {
  summary: Summary;
  onDownload: (summary: Summary) => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, onDownload }) => {
  const date = new Date(summary.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Card className="glass-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4">
        <div className="flex items-start sm:items-center gap-4">
          <div className="p-2 bg-muted rounded-lg shrink-0">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-medium truncate">{summary.file_name}</h3>
            <p className="text-sm text-muted-foreground">
              {formattedDate} at {formattedTime} • {summary.page_count} pages
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          onClick={() => onDownload(summary)}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </Card>
  );
};

export default SummaryCard;
