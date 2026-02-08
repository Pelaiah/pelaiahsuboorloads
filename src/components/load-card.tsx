import Link from 'next/link';
import Image from 'next/image';
import type { Load } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, DollarSign, MapPin, Truck, Weight, Car, GaugeCircle, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { format } from 'date-fns';

interface LoadCardProps {
  load: Load;
  isSelected: boolean;
  onClick: () => void;
}

export function LoadCard({ load, isSelected, onClick }: LoadCardProps) {
  // To make car names look somewhat real from the data
  const carName = `${load.company.split(' ')[0]} ${load.vehicleType}`;

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all overflow-hidden", 
        isSelected ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <div className="relative h-32 w-32 flex-shrink-0">
             <Image
                src={`https://picsum.photos/seed/${load.id}/200/200`}
                alt={carName}
                fill
                className="object-cover"
                data-ai-hint="car"
             />
          </div>
          <div className="p-4 pr-6 flex-1">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-lg">{carName}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{load.origin.city}, {load.origin.state}</span>
                    </div>
                </div>
                <Link href={`/loads/${load.id}`} className="flex-shrink-0">
                    <Button variant="ghost" size="icon" className="h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 rounded-full">
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
            <div className="mt-2 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-muted-foreground" />
                    <span>{load.vehicleType}</span>
                </div>
                <div className="flex items-center gap-2">
                    <GaugeCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{load.distance} mi range</span>
                </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
