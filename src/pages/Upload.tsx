
import React, { useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ArrowLeft, FileUp, HelpCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const ACCEPTED_FILE_TYPES = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
};
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (!session) {
      toast.error("Please login or signup first");
      navigate("/login");
    }
  }, [session, navigate]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const error = rejectedFiles[0].errors[0];
      if (error.code === "file-too-large") {
        toast.error("File is too large. Maximum size is 10MB.");
      } else if (error.code === "file-invalid-type") {
        toast.error("Invalid file type. Please upload a PDF, DOC, or DOCX file.");
      } else {
        toast.error("Error uploading file. Please try again.");
      }
      return;
    }
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      toast.success("File uploaded successfully!");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: false
  });

  const handleContinue = async () => {
    if (!file || !session?.user) return;

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const filePath = `${session.user.id}/${crypto.randomUUID()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('legal_docs')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Create summary record
      const { error: dbError } = await supabase
        .from('summaries')
        .insert({
          file_name: file.name,
          user_id: session.user.id,
          page_count: 1, // This should be calculated from the actual document
          status: 'processing',
          original_file_path: filePath,
        });

      if (dbError) throw dbError;

      navigate("/processing");
    } catch (error: any) {
      toast.error(error.message || "Error uploading file");
    }
  };

  return <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Need help? Contact our support team.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-up">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Upload Your Deposition
            </h1>
            <p className="text-muted-foreground">
              We'll analyze your document and provide a detailed summary
            </p>
          </div>

          {/* Upload Box */}
          <div {...getRootProps()} className={`w-full max-w-2xl glass-card rounded-xl border-2 border-dashed border-primary p-12 text-center cursor-pointer transition-all hover:border-primary/80 ${isDragActive ? "border-opacity-100" : "border-opacity-50"}`}>
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className={`rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center transition-transform ${isDragActive ? "scale-110" : ""}`}>
                {file ? <CheckCircle2 className="h-8 w-8 text-primary" /> : <FileUp className="h-8 w-8 text-primary" />}
              </div>

              {file ? <div className="space-y-2">
                  <p className="text-lg font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div> : <div className="space-y-2">
                  <p className="text-lg font-medium">
                    {isDragActive ? "Drop your file here" : "Drag & drop your file here"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to select a file
                  </p>
                </div>}
            </div>
          </div>

          {/* File Requirements */}
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Supported formats: PDF, DOC, DOCX (max 10MB)
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-lg p-6 text-center max-w-xl">
            <p className="text-muted-foreground font-normal">Fear not! We are built on Bank-Level encryption databases so your documents are safe and protected. Experience our expert AI-powered analysis and see the difference it makes in your case preparation.</p>
          </div>

          {/* Continue Button */}
          {file && <Button className="w-full max-w-md animate-fade-up" onClick={handleContinue}>
              Continue to Processing
            </Button>}

          {/* Testing Navigation */}
          <div className="w-full max-w-2xl p-4 glass-card rounded-lg animate-fade-up mt-8">
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
        </div>
      </div>
    </div>;
};

export default Upload;
