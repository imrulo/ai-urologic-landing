import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
    const domainName = "AIUrologic.com";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-visible">

            {/* Hero Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 z-10">

                {/* Smart Fix Logic: Separated Action Phrase */}
                <FadeIn className="flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-primary-foreground/80 uppercase tracking-widest shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Premium Digital Asset
                    </div>

                    {/* Domain Title */}
                    <h1 className="font-heading text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-tighter select-none max-w-full mx-auto drop-shadow-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                            AI
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-300">
                            Urologic
                        </span>
                        <span className="text-muted-foreground/40 font-light">
                            .com
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed font-light">
                        The definitive authority for the future of <strong className="text-white font-medium">Urology</strong> and <strong className="text-primary font-medium">Medical AI</strong>.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mt-8">
                    <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(6,182,212,0.6)] border-0">
                        <Link href="https://wa.link/6difl3" target="_blank">
                            Secure This Domain <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white transition-all">
                        <Link href="mailto:imrulo.eth@proton.me">
                            <Mail className="mr-2 h-5 w-5" /> Make an Offer
                        </Link>
                    </Button>
                </FadeIn>

                <FadeIn delay={0.6} className="mt-12">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground/60 font-mono">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        3 offers received in the last 7 days
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
