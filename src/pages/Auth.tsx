
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate("/dashboard");
    }
  }, [session, navigate]);

  const form = useForm<LoginFormData | SignupFormData>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    defaultValues: {
      ...(isLogin ? {} : { name: "" }),
      email: "",
      password: "",
      ...(isLogin ? {} : { confirmPassword: "" }),
    },
  });

  const onSubmit = async (data: LoginFormData | SignupFormData) => {
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
        
        if (error) throw error;
        
        toast.success("Successfully logged in!");
        navigate("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              name: (data as SignupFormData).name,
            },
          },
        });
        
        if (error) throw error;
        
        toast.success("Successfully signed up! Please check your email for verification.");
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred during authentication");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Column - Marketing Text */}
      <div className="hidden lg:flex lg:w-1/2 p-8 items-center justify-center animate-fade-up">
        <div className="max-w-xl space-y-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transform Your Legal Work with{" "}
            <span className="text-primary">AI-Powered</span> Summaries
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Join thousands of legal professionals who trust our platform for fast,
            accurate, and secure deposition summaries.
          </p>
          
          <ul className="space-y-4">
            {[
              "Lightning-fast processing with advanced AI",
              "Bank-level security for your documents",
              "Expert-verified summarization technology",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start text-muted-foreground">
                <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-up">
          {/* Mobile Back Link */}
          <Link
            to="/"
            className="lg:hidden inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin
                ? "Sign in to access your summaries"
                : "Get started with your free account"}
            </p>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {!isLogin && (
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {!isLogin && (
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm your password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button type="submit" className="w-full">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={toggleMode}
                  className="text-primary hover:text-primary/90 font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
              {isLogin && (
                <Link
                  to="/forgot-password"
                  className="text-sm text-muted-foreground hover:text-foreground mt-2 inline-block"
                >
                  Forgot your password?
                </Link>
              )}
            </div>
          </div>

          {/* Testing Navigation */}
          <div className="mt-8 p-4 glass-card rounded-lg">
            <h3 className="text-sm font-medium mb-4">Testing Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/upload")}
              >
                Go to Upload
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/processing")}
              >
                Go to Processing
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/payment")}
              >
                Go to Payment
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
