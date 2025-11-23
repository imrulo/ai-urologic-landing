import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold tracking-tight">AIUrologic.com</span>
                    <p className="text-sm text-muted-foreground">
                        The definitive digital asset for the future of urology.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                        Made with ❤️ by <Link href="https://twitter.com/imrulo" className="hover:text-foreground transition-colors">imrulo.eth</Link>
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border/40 text-center">
                <p className="text-xs text-muted-foreground/60">
                    Disclaimer: This is a domain landing page for sale purposes only. No active services are implied.
                    <br />
                    We respect your privacy — no cookies, no tracking.
                </p>
            </div>
        </footer>
    );
}
