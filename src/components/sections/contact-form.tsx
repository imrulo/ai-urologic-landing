"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(formData);
            if (result.success) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-24 bg-background" id="contact">
            <div className="container px-4 md:px-6 max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Make an Offer
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Serious inquiries only. Please provide your contact details and offer amount.
                    </p>
                </div>

                {isSuccess ? (
                    <div className="p-8 rounded-xl shadow-sm bg-green-50 border border-green-200 text-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Inquiry Sent!</h3>
                        <p className="text-green-700">
                            Thank you for your interest. We will review your offer and get back to you shortly.
                        </p>
                        <Button
                            className="mt-6"
                            variant="outline"
                            onClick={() => setIsSuccess(false)}
                        >
                            Send Another Inquiry
                        </Button>
                    </div>
                ) : (
                    <form action={handleSubmit} className="space-y-6 border border-border/50 p-8 rounded-xl shadow-sm bg-card">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="offer">Offer Amount (USD)</Label>
                            <Input id="offer" name="offer" type="number" placeholder="5000" min="1000" disabled={isSubmitting} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message (Optional)</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="I'm interested in acquiring this domain for..."
                                className="min-h-[120px]"
                                disabled={isSubmitting}
                            />
                        </div>

                        <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send className="ml-2 h-4 w-4" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            We respect your privacy. No tracking, no cookies, no analytics.
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
}
