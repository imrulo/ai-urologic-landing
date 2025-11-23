import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "AIUrologic.com - Premium Domain for Sale",
    description: "Acquire AIUrologic.com, the definitive digital asset for the future of urology and medical AI. Secure this premium domain today.",
    openGraph: {
        title: "AIUrologic.com - Premium Domain for Sale",
        description: "Acquire AIUrologic.com, the definitive digital asset for the future of urology and medical AI.",
        url: "https://aiurologic.com",
        siteName: "AIUrologic.com",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AIUrologic.com - Premium Domain for Sale",
        description: "Acquire AIUrologic.com, the definitive digital asset for the future of urology and medical AI.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
                <Navbar />
                <main className="min-h-screen relative overflow-hidden">
                    {/* Global Background Effects */}
                    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-50" />
                    <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] -z-40 pointer-events-none" />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
