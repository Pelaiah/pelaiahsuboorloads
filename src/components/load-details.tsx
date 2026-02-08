"use client"

import * as React from 'react';
import type { Load } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Calendar, DollarSign, MapPin, Truck, Weight } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { SignaturePad } from './signature-pad';
import { useToast } from '@/hooks/use-toast';

interface LoadDetailsProps {
  load: Load;
}

export function LoadDetails({ load }: LoadDetailsProps) {
    const [offer, setOffer] = React.useState(load.rate);
    const [isOfferPlaced, setIsOfferPlaced] = React.useState(false);
    const [isSigned, setIsSigned] = React.useState(false);
    const { toast } = useToast();

    const handlePlaceOffer = () => {
        // In a real app, this would be an API call
        setIsOfferPlaced(true);
        toast({
            title: "Offer Placed!",
            description: `Your offer of $${offer.toLocaleString()} has been submitted.`,
        });
    }

    const handleSignatureSave = (signature: string) => {
      // In a real app, this would be an API call to save the signature
      if (signature) {
        setIsSigned(true);
        toast({
            title: "Agreement Signed!",
            description: `You have been awarded the load.`,
        });
      }
    }


  return (
    <div className="container py-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Load Board
            </Link>
        </Button>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Load #{load.id}</CardTitle>
              <CardDescription>from {load.company}</CardDescription>
            </div>
            <div className="text-3xl font-bold text-primary">${load.rate.toLocaleString()}</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">Trip Details</h3>
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary"/>
                        <div>
                            <p className="font-medium">Origin</p>
                            <p className="text-muted-foreground">{load.origin.city}, {load.origin.state}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary"/>
                        <div>
                            <p className="font-medium">Destination</p>
                            <p className="text-muted-foreground">{load.destination.city}, {load.destination.state}</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground">{load.distance} miles</p>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Load Information</h3>
                     <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Pickup</p>
                            <p className="text-muted-foreground">{format(new Date(load.pickupDate), 'PPP, p')}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Delivery</p>
                            <p className="text-muted-foreground">{format(new Date(load.deliveryDate), 'PPP, p')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Vehicle Type</p>
                            <p className="text-muted-foreground">{load.vehicleType}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <Weight className="h-5 w-5 text-primary"/>
                        <div>
                            <p className="font-medium">Weight</p>
                            <p className="text-muted-foreground">{load.weight.toLocaleString()} lbs</p>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="space-y-4">
                <h3 className="font-semibold">Negotiation</h3>
                { !isOfferPlaced ? (
                    <div className="flex items-end gap-4">
                        <div className="flex-grow">
                            <Label htmlFor="offer">Your Offer</Label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="offer" type="number" value={offer} onChange={(e) => setOffer(Number(e.target.value))} className="pl-8"/>
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-primary hover:bg-primary/90">Place Offer</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Confirm Your Offer</DialogTitle>
                                    <DialogDescription>
                                        You are about to place an offer of ${offer.toLocaleString()} for this load. This action cannot be undone.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose asChild>
                                  <Button onClick={handlePlaceOffer} className="w-full">Confirm and Place Offer</Button>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </div>
                ) : !isSigned ? (
                    <div className="p-4 rounded-lg bg-muted text-center space-y-4">
                        <p>Your offer of ${offer.toLocaleString()} has been accepted!</p>
                         <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-primary hover:bg-primary/90">Sign Agreement</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xl">
                                <DialogHeader>
                                    <DialogTitle>Sign to Confirm</DialogTitle>
                                    <DialogDescription>
                                        Please sign below to confirm your acceptance of this load.
                                    </DialogDescription>
                                </DialogHeader>
                                <SignaturePad onSave={handleSignatureSave} />
                            </DialogContent>
                        </Dialog>
                    </div>
                ) : (
                    <div className="p-4 rounded-lg bg-green-900/50 border border-green-500 text-center space-y-2">
                        <h4 className="font-bold text-green-400">Load Confirmed!</h4>
                        <p className="text-sm text-green-300">This load has been added to your schedule. Happy trucking!</p>
                    </div>
                )
                }
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
