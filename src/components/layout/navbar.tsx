import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">AIUrologic</span>
            </div>
            <div className="flex items-center gap-4">
                <Link href="mailto:imrulo.eth@proton.me" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                </Link>
                <Button asChild variant="default" size="sm">
                    <Link href="https://wa.link/6difl3" target="_blank">
                        Inquire Now
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
