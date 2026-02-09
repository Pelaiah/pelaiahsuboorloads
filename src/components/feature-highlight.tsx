import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";

const featureImage = PlaceHolderImages.find(img => img.id === 'feature-truck');

const features = [
    "Real-time GPS tracking on all shipments.",
    "Instant notifications for new loads in your lane.",
    "Secure and transparent payment processing.",
    "24/7 support from our dedicated logistics team."
];

export function FeatureHighlight() {
    if (!featureImage) return null;

    return (
        <section id="features" className="py-20 md:py-32">
            <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        data-ai-hint={featureImage.imageHint}
                    />
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Powerful Features</span>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Everything You Need, Nothing You Don't
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our platform is designed to streamline your operations, increase your efficiency, and boost your bottom line.
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-slate-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                     <Button size="lg" asChild>
                        <Link href="/signup">
                            Explore Features
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
