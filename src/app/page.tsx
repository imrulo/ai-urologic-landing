import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { MarketProof } from "@/components/sections/market-proof";
import { UseCases } from "@/components/sections/use-cases";
import { TrustProcess } from "@/components/sections/trust-process";
import { FAQ } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ValueProposition />
            <MarketProof />
            <UseCases />
            <TrustProcess />
            <FAQ />
            <ContactForm />
        </div>
    );
}
