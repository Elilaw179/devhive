'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Mail, Send, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'There was a problem with your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-8 duration-1000 ease-in-out">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll be in touch.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 ease-in-out">
             <h3 className="font-headline text-xl font-semibold">Other Ways to Connect</h3>
             <p className="text-muted-foreground">
                Prefer to reach out directly? Find us here:
             </p>
             <div className="space-y-4">
                <Link href="mailto:contact@devhive.com" className="flex items-center gap-3 group">
                    <Button variant="outline" size="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <Mail className="h-5 w-5" />
                    </Button>
                    <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">Email Us</p>
                        <p className="text-sm text-muted-foreground">contact@devhive.com</p>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61581797937944" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Button variant="outline" size="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <Facebook className="h-5 w-5 text-blue-600" />
                    </Button>
                    <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">Follow on Facebook</p>
                        <p className="text-sm text-muted-foreground">DevHive</p>
                    </div>
                </Link>
                <Link href="https://www.linkedin.com/posts/devhive-tech_devhive-innovation-techsolutions-activity-7380290621997015040-4twI?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Button variant="outline" size="icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <Linkedin className="h-5 w-5 text-blue-700" />
                    </Button>
                    <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">Connect on LinkedIn</p>
                        <p className="text-sm text-muted-foreground">DevHive</p>
                    </div>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
