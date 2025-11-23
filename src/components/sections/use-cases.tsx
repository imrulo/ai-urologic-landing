import { Check } from "lucide-react";

const useCases = [
    {
        industry: "AI Startup",
        benefit: "Build instant authority and visibility",
        description: "Launch your platform with a name that signals innovation and leadership.",
    },
    {
        industry: "SaaS Brand",
        benefit: "Dominate your niche from day one",
        description: "Capture the market with a category-defining domain that is impossible to ignore.",
    },
    {
        industry: "Venture Firm",
        benefit: "Establish credibility with a powerful brand",
        description: "Invest in a digital asset that enhances portfolio value and trust.",
    },
    {
        industry: "Medical Practice",
        benefit: "Attract high-value patients",
        description: "Position your clinic as the premier destination for advanced urologic care.",
    },
];

export function UseCases() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Strategic Applications
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                        How AIUrologic.com can be leveraged across different sectors.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-border/50 bg-background shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-muted/50 p-4 font-medium text-muted-foreground hidden md:grid">
                        <div>Industry</div>
                        <div>Strategic Benefit</div>
                        <div>Description</div>
                    </div>
                    <div className="divide-y divide-border/50">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 hover:bg-muted/20 transition-colors">
                                <div className="font-semibold text-primary flex items-center gap-2">
                                    <span className="md:hidden text-muted-foreground font-normal">Industry:</span>
                                    {useCase.industry}
                                </div>
                                <div className="font-medium flex items-center gap-2">
                                    <span className="md:hidden text-muted-foreground font-normal">Benefit:</span>
                                    {useCase.benefit}
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2">
                                    <span className="md:hidden text-muted-foreground font-normal">Desc:</span>
                                    {useCase.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
