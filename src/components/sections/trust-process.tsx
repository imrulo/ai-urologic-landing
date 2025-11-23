import { Shield, Lock, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
    {
        icon: Lock,
        title: "1. Secure Agreement",
        description: "We agree on a price and initiate a secure transaction via Escrow.com.",
    },
    {
        icon: CreditCard,
        title: "2. Safe Payment",
        description: "You deposit funds into Escrow.com's secure holding account.",
    },
    {
        icon: Shield,
        title: "3. Domain Transfer",
        description: "We transfer the domain to your registrar of choice.",
    },
    {
        icon: Check,
        title: "4. Transaction Complete",
        description: "Funds are released only after you confirm full control of the domain.",
    },
];

import { Check } from "lucide-react";

export function TrustProcess() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            Secure & Transparent Acquisition
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We use Escrow.com to ensure a safe, seamless, and risk-free transaction for both parties.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-border/50">
                            <p className="text-sm font-medium text-muted-foreground mb-4">
                                Interested in multiple domains? Ask about portfolio pricing.
                            </p>
                            <Button asChild variant="default" size="lg">
                                <Link href="https://wa.link/6difl3" target="_blank">
                                    Start Secure Transaction <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105 -z-10" />
                        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center justify-center mb-8">
                                {/* Escrow.com Logo Placeholder - Text for now */}
                                <span className="text-3xl font-bold text-foreground tracking-tighter">ESCROW.COM</span>
                            </div>
                            <blockquote className="text-center space-y-4">
                                <p className="text-lg italic text-muted-foreground">
                                    "Flawless acquisition experience — secure, transparent, and fast. The transfer was completed in under 24 hours."
                                </p>
                                <footer className="text-sm font-medium text-foreground">
                                    — Recent Buyer, MedTech Sector
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
