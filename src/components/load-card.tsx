import Link from 'next/link';
import type { Load } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, DollarSign, MapPin, Truck, Weight } from 'lucide-react';
import { Button } from './ui/button';
import { format } from 'date-fns';

interface LoadCardProps {
  load: Load;
  isSelected: boolean;
  onClick: () => void;
}

export function LoadCard({ load, isSelected, onClick }: LoadCardProps) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all", 
        isSelected ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
            <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <span>{load.origin.city}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span>{load.destination.city}</span>
                </div>
                <p className="text-xs text-muted-foreground">{load.distance} mi</p>
            </div>
            <div className="text-lg font-bold text-primary">${load.rate.toLocaleString()}</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>{load.vehicleType}</span>
            </div>
            <div className="flex items-center gap-2">
                <Weight className="h-4 w-4" />
                <span>{load.weight.toLocaleString()} lbs</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Pickup: {format(new Date(load.pickupDate), 'MMM d')}</span>
            </div>
        </div>
        <div className="mt-4 flex justify-end">
            <Button asChild variant="ghost" size="sm">
                <Link href={`/loads/${load.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
