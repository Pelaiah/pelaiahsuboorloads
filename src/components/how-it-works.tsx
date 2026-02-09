import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Search, Truck } from "lucide-react";

const steps = [
    {
        icon: <Search className="h-10 w-10 text-primary" />,
        title: "Find Your Load",
        description: "Search our extensive network of available loads to find the one that best fits your route and schedule."
    },
    {
        icon: <Package className="h-10 w-10 text-primary" />,
        title: "Book with a Tap",
        description: "Instantly book loads directly from the app. No phone calls, no waiting, just simple and efficient booking."
    },
    {
        icon: <Truck className="h-10 w-10 text-primary" />,
        title: "Drive and Earn",
        description: "Complete your delivery with real-time tracking and get paid promptly. We make it easy to manage your business on the go."
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-slate-50 py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Getting started with Sulboor is simple. Three easy steps to get you on the road.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <Card key={i} className="text-center shadow-lg">
                            <CardHeader>
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                    {step.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <p className="text-slate-600">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
