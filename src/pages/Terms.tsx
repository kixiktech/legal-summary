
import React from "react";
import Navbar from "@/components/Navbar";
import { FileText, Shield, Info } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 14, 2024
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-12 animate-fade-up">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground">
                By accessing and using LegalSummarize, you agree to be bound by these Terms of Service. Please read these terms carefully before using our service.
              </p>
            </section>

            {/* Service Description */}
            <section className="space-y-4 glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold">Service Description</h2>
              <p className="text-muted-foreground">
                LegalSummarize provides an AI-powered legal document summarization service. Our service includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span>Automated summarization of legal documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span>Key information extraction and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span>Secure document storage and management</span>
                </li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">User Responsibilities</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>As a user of our service, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Not misuse or attempt to exploit the service</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4 glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content, features, and functionality of our service, including but not limited to text, graphics, logos, and software, are owned by LegalSummarize and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                LegalSummarize provides its service on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of any summarizations or analysis provided through our service.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Continued use of the service after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="glass-card p-6 rounded-lg">
                <p className="text-muted-foreground">
                  Email: legal@legalsummarize.com<br />
                  Address: 123 Legal Street, Suite 100<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
