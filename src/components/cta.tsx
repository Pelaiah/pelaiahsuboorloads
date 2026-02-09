import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
    return (
        <section className="bg-primary/5 py-20 md:py-32">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Ready to Take Control of Your Freight?
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Join thousands of shippers and carriers who trust Sulboor to move their business forward. Sign up today and experience the future of logistics.
                </p>
                <div className="mt-8">
                     <Button size="lg" asChild>
                        <Link href="/signup">
                            Get Started for Free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
