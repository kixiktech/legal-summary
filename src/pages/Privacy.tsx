
import React from "react";
import Navbar from "@/components/Navbar";
import { Shield, Lock, Info } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
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
                At LegalSummarize, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our legal document summarization service.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4 glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name and contact information</li>
                  <li>Billing and payment details</li>
                  <li>Professional information</li>
                  <li>Login credentials</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Document Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Uploaded legal documents</li>
                  <li>Generated summaries</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>To provide and maintain our service, including document processing and summary generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>To process your payments and prevent fraud</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>To improve and personalize your experience with our service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>To communicate with you about service updates and changes</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="space-y-4 glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement strict security measures to protect your information:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• End-to-end encryption for document transmission</li>
                <li>• Secure data storage with regular backups</li>
                <li>• Access controls and authentication protocols</li>
                <li>• Regular security audits and updates</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="glass-card p-6 rounded-lg">
                <p className="text-muted-foreground">
                  Email: privacy@legalsummarize.com<br />
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

export default Privacy;
