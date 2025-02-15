
import React from "react";
import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
      <div className="relative">
        <FileText className="h-16 w-16 text-muted-foreground/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Upload className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium">No summaries yet</h3>
        <p className="text-muted-foreground">
          Upload your first deposition to get started
        </p>
      </div>
      <Button asChild>
        <Link to="/upload">Upload Deposition</Link>
      </Button>
    </div>
  );
};

export default EmptyState;
