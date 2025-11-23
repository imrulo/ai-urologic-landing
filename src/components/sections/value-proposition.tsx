import { CheckCircle2, TrendingUp, Globe, ShieldCheck } from "lucide-react";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Brand Authority",
        description: "Establish instant credibility with a premium, category-defining domain name.",
    },
    {
        icon: TrendingUp,
        title: "SEO Advantage",
        description: "Leverage high organic potential with exact-match keywords for your industry.",
    },
    {
        icon: Globe,
        title: "Market Versatility",
        description: "A powerful asset adaptable across MedTech, AI, and healthcare sectors.",
    },
    {
        icon: CheckCircle2,
        title: "Asset Appreciation",
        description: "Secure a digital asset that historically appreciates in value over time.",
    },
];

export function ValueProposition() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Why Acquire AIUrologic.com?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                        More than just a name—it's a strategic foundation for market leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                <benefit.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
