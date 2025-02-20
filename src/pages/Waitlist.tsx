
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import TestNav from "@/components/TestNav";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

const WaitlistPage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // TODO: Integrate with backend
    console.log("Form submitted:", values);
    toast.success("You've been added to the waitlist! We'll be in touch soon.");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 left-4 text-white hover:text-white/80"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Exclusive Access Only for a Limited Few
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Due to unprecedented demand for our expert legal summarizer, we are currently limiting access to ensure perfection. We're opening up only 100 new spots each week to deliver the highest quality service.
            </p>
          </div>

          <div className="glass-card p-8 space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-background/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          {...field} 
                          className="bg-background/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black hover:bg-primary/90 transition-colors"
                >
                  Reserve Your Spot
                </Button>
              </form>
            </Form>

            <p className="text-sm text-muted-foreground">
              Join an exclusive group of forward-thinking legal professionals who are ready to transform their workflows. We'll notify you via email as soon as your access is ready.
            </p>
          </div>
        </div>
      </div>
      <TestNav />
    </div>
  );
};

export default WaitlistPage;
