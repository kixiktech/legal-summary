
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const contactEmail = "support@legalsummarize.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-12 px-4">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Contact Support</h1>
            <p className="text-muted-foreground">
              We're here to help with any questions or concerns you may have
            </p>
          </div>

          <div className="glass-card p-6 space-y-4">
            <p className="text-base">
              Get in touch with our support team about:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Questions about our services</li>
              <li>Technical issues or bugs</li>
              <li>Feature requests and feedback</li>
              <li>Account and billing support</li>
              <li>General inquiries</li>
            </ul>

            <div className="pt-4">
              <Button onClick={handleEmailClick} className="w-full">
                <Mail className="mr-2" />
                Email Support Team
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center pt-2">
              Our team typically responds within 24 hours during business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
