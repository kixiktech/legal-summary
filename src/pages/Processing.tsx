
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PROCESSING_TIME = 35000; // 35 seconds

const ProcessingMessages = [
  "Analyzing document structure...",
  "Extracting key information...",
  "Identifying important statements...",
  "Generating comprehensive summary...",
];

const Processing = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate();

  const handleCompletion = useCallback(() => {
    toast.success("Analysis complete!");
    setTimeout(() => navigate("/payment"), 1000);
  }, [navigate]);

  useEffect(() => {
    const startTime = Date.now();
    let timeoutId: NodeJS.Timeout | null = null;
    let isActive = true;

    const updateProgress = () => {
      if (!isActive) return;

      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / PROCESSING_TIME) * 100, 100);
      
      console.log('Progress update:', {
        elapsed,
        calculatedProgress,
        startTime,
        now: Date.now()
      });
      
      setProgress(calculatedProgress);

      // Update message based on progress
      const newMessageIndex = Math.min(
        Math.floor((calculatedProgress / 100) * ProcessingMessages.length),
        ProcessingMessages.length - 1
      );
      setMessageIndex(newMessageIndex);

      if (calculatedProgress < 100) {
        timeoutId = setTimeout(updateProgress, 100);
      } else if (isActive) {
        handleCompletion();
      }
    };

    timeoutId = setTimeout(updateProgress, 100);

    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleCompletion]);

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel the processing?")) {
      navigate("/upload");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/upload"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <FileText className="w-16 h-16 text-primary opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          </div>

          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-2xl font-bold tracking-tight">
              {ProcessingMessages[messageIndex]}
            </h1>
            <p className="text-muted-foreground">
              Please wait while we process your document
            </p>
          </div>

          <div className="w-full space-y-4 animate-fade-up">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground text-center">
              {Math.round(progress)}% complete
            </p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center max-w-xl animate-fade-up">
            <p className="text-muted-foreground">
              Our AI is carefully analyzing your deposition, extracting key information
              and preparing a comprehensive summary.
            </p>
          </div>

          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={handleCancel}
          >
            Cancel Processing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Processing;
