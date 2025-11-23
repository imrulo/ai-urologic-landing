import { TrendingUp } from "lucide-react";

const comparableSales = [
    { domain: "AIHealth.com", price: "$XX,XXX", year: "2023" },
    { domain: "Urology.com", price: "$XXX,XXX", year: "2021" },
    { domain: "MedTech.ai", price: "$XX,XXX", year: "2024" },
    { domain: "Doctor.ai", price: "$XX,XXX", year: "2022" },
];

export function MarketProof() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Market Validation
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                        Premium domains in the medical and AI space consistently command high valuations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Chart / Data Visualization Placeholder */}
                    <div className="bg-muted/20 p-8 rounded-2xl border border-border/50">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold">Keyword Interest</h3>
                            <span className="text-sm text-muted-foreground">Last 5 Years</span>
                        </div>
                        <div className="h-[200px] flex items-end justify-between gap-2">
                            {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 90, 100].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-500 group-hover:bg-primary/80"
                                        style={{ height: `${h}%` }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                            <span>Low Competition</span>
                            <span className="flex items-center gap-1 text-primary font-medium">
                                <TrendingUp className="w-4 h-4" /> High Growth
                            </span>
                            <span>High CPC</span>
                        </div>
                    </div>

                    {/* Comparable Sales Table */}
                    <div className="overflow-hidden rounded-xl border border-border/50">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="p-4 font-medium text-muted-foreground">Domain</th>
                                    <th className="p-4 font-medium text-muted-foreground">Est. Value / Sale</th>
                                    <th className="p-4 font-medium text-muted-foreground text-right">Year</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {comparableSales.map((sale, index) => (
                                    <tr key={index} className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-medium">{sale.domain}</td>
                                        <td className="p-4 text-muted-foreground">{sale.price}</td>
                                        <td className="p-4 text-muted-foreground text-right">{sale.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-4 bg-muted/30 text-center border-t border-border/50">
                            <p className="text-sm font-medium text-primary">
                                Comparable sales suggest an estimated value range of $5,000–$15,000+.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-8 grayscale opacity-60">
                    {/* Placeholder logos for NameBio, Afternic, Sedo - Text for now as no images */}
                    <span className="text-xl font-bold text-muted-foreground">NameBio</span>
                    <span className="text-xl font-bold text-muted-foreground">Afternic</span>
                    <span className="text-xl font-bold text-muted-foreground">Sedo</span>
                </div>
            </div>
        </section>
    );
}
