import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Clock, DollarSign, Users } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Verified Professionals",
        description: "Every carrier and shipper in our network is thoroughly vetted for safety and reliability."
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "24/7 Availability",
        description: "Our platform and support teams are available around the clock to keep your freight moving."
    },
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Transparent Pricing",
        description: "No hidden fees. What you see is what you get. Fair and upfront pricing on every load."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Growing Community",
        description: "Join a network of thousands of professionals building stronger supply chains together."
    }
]

export function WhyChooseUs() {
    return (
        <section className="bg-slate-50 py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why Choose Sulboor?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We're more than just a load board. We're your partner in logistics.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <Card key={i} className="border-0 bg-transparent shadow-none">
                            <CardHeader className="flex flex-row items-center gap-4 p-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4">
                                <p className="text-slate-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
