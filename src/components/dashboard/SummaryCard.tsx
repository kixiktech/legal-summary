
import React from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Summary } from "@/types/dashboard";

interface SummaryCardProps {
  summary: Summary;
  onDownload: (summary: Summary) => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, onDownload }) => {
  const date = new Date(summary.uploadDate);
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
    <Card className="glass-card flex items-center justify-between p-4 animate-fade-up">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-muted rounded-lg">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">{summary.fileName}</h3>
          <p className="text-sm text-muted-foreground">
            {formattedDate} at {formattedTime} • {summary.pageCount} pages
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="ml-4"
        onClick={() => onDownload(summary)}
      >
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </Card>
  );
};

export default SummaryCard;
