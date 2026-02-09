"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: "testimonial-1",
        name: "John D., Carrier",
        quote: "Sulboor has been a game-changer for my business. I can find high-paying loads and get paid fast. The live tracking gives my clients peace of mind.",
        avatarId: "testimonial-1"
    },
    {
        id: "testimonial-2",
        name: "Sarah W., Shipper",
        quote: "The quality of carriers on Sulboor is top-notch. I know my freight is in good hands. The platform is so easy to use.",
        avatarId: "testimonial-2"
    },
    {
        id: "testimonial-3",
        name: "Mike R., Fleet Owner",
        quote: "Managing my fleet has never been easier. I can assign loads, track my drivers, and manage payments all in one place. Highly recommend!",
        avatarId: "testimonial-3"
    }
]

export function Testimonials() {
    const getAvatarUrl = (avatarId: string) => {
        return PlaceHolderImages.find(img => img.id === avatarId)?.imageUrl || "";
    }
     const getAvatarHint = (avatarId: string) => {
        return PlaceHolderImages.find(img => img.id === avatarId)?.imageHint || "";
    }

    return (
        <section id="testimonials" className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Loved by Shippers and Carriers Alike
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Don't just take our word for it. Here's what our users have to say.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-4xl mx-auto mt-16"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-start gap-4 p-6">
                                            <div className="flex text-primary">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                            </div>
                                            <p className="text-slate-700">"{testimonial.quote}"</p>
                                            <div className="flex items-center gap-3 pt-4">
                                                <Avatar>
                                                    <AvatarImage src={getAvatarUrl(testimonial.avatarId)} alt={testimonial.name} data-ai-hint={getAvatarHint(testimonial.avatarId)} />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
