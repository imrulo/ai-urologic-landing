import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Why is AIUrologic.com a valuable asset?",
        answer:
            "It combines two high-growth sectors: Artificial Intelligence and Urology. It's short, memorable, and establishes instant authority in the MedTech space.",
    },
    {
        question: "Who benefits most from owning this domain?",
        answer:
            "MedTech startups, urology clinics, AI healthcare platforms, and venture capital firms looking to establish a dominant brand presence.",
    },
    {
        question: "How do I make an offer?",
        answer:
            "You can submit an offer directly via the contact form below or email us at imrulo.eth@proton.me. We review all serious inquiries within 24 hours.",
    },
    {
        question: "How is ownership transferred?",
        answer:
            "We use Escrow.com for a secure and transparent transfer process. Once funds are secured, the domain is unlocked and transferred to your registrar.",
    },
    {
        question: "What happens after purchase?",
        answer:
            "You will have full ownership and control of the domain. You can use it for your website, email, or hold it as an appreciating asset.",
    },
    {
        question: "Is this a one-time opportunity?",
        answer:
            "Yes. Premium domains like this are unique digital assets. Once sold, it may not be available on the market again for years, if ever.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about acquiring this premium asset.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
