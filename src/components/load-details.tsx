"use client"

import * as React from 'react';
import type { Load } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, DollarSign, MapPin, Truck, Weight, Car, GaugeCircle } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

interface LoadDetailsProps {
  load: Load;
}

export function LoadDetails({ load }: LoadDetailsProps) {
    const { toast } = useToast();
    const carName = `${load.company.split(' ')[0]} ${load.vehicleType}`;

    const handleBookNow = () => {
        toast({
            title: "Booked!",
            description: `You have successfully booked ${carName}.`,
        });
    }

  return (
    <div className="container py-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Car List
            </Link>
        </Button>
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
            <div className="relative h-64 w-full">
                <Image
                    src={`https://picsum.photos/seed/${load.id}/800/400`}
                    alt={carName}
                    fill
                    className="object-cover"
                    data-ai-hint="car"
                />
            </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
             <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{carName}</CardTitle>
                  <CardDescription>from {load.company}</CardDescription>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold text-primary">${load.rate.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">per day</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">Details</h3>
                     <div className="flex items-center gap-3">
                        <Car className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Car Type</p>
                            <p className="text-muted-foreground">{load.vehicleType}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <GaugeCircle className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Range</p>
                            <p className="text-muted-foreground">{load.distance} miles</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground">{load.origin.city}, {load.origin.state}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Availability</h3>
                     <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Pickup</p>
                            <p className="text-muted-foreground">{format(new Date(load.pickupDate), 'PPP')}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Dropoff</p>
                            <p className="text-muted-foreground">{format(new Date(load.deliveryDate), 'PPP')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="flex justify-end">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleBookNow}>Book Now</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
