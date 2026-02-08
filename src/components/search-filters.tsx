"use client";

import * as React from 'react';
import type { Load } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, SlidersHorizontal, Zap } from 'lucide-react';
import { generateLoadSearchSuggestions } from '@/ai/flows/load-search-suggestions';
import { useToast } from '@/hooks/use-toast';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';

interface SearchFiltersProps {
  allLoads: Load[];
  setFilteredLoads: (loads: Load[]) => void;
}

export function SearchFilters({ allLoads, setFilteredLoads }: SearchFiltersProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [vehicleType, setVehicleType] = React.useState('all');
  const [maxWeight, setMaxWeight] = React.useState(50000);
  const [suggestions, setSuggestions] = React.useState('');
  const [isLoadingSuggestions, setIsLoadingSuggestions] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    const handler = setTimeout(() => {
        let loads = allLoads;
        if (searchTerm) {
            loads = loads.filter(load => 
                load.origin.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                load.destination.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (vehicleType !== 'all') {
            loads = loads.filter(load => load.vehicleType === vehicleType);
        }
        loads = loads.filter(load => load.weight <= maxWeight);
        setFilteredLoads(loads);
    }, 300); // Debounce search

    return () => clearTimeout(handler);
  }, [allLoads, searchTerm, setFilteredLoads, vehicleType, maxWeight]);

  const handleGetSuggestions = async () => {
    if (!searchTerm) return;
    setIsLoadingSuggestions(true);
    setSuggestions('');
    try {
        const result = await generateLoadSearchSuggestions({
            currentSearchCriteria: `Origin/Destination: ${searchTerm}, Vehicle Type: ${vehicleType}, Max Weight: ${maxWeight} lbs`,
            pastPreferences: "Prefers long-haul, high-paying reefer loads, avoids NYC."
        });
        setSuggestions(result.suggestedFilters);
    } catch (error) {
        console.error('Error generating suggestions:', error);
        toast({
            variant: "destructive",
            title: "Suggestion Error",
            description: "Could not generate AI suggestions.",
        });
    } finally {
        setIsLoadingSuggestions(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <Collapsible>
          <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                  <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                          placeholder="Search by city..." 
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                      />
                  </div>
                  <Button onClick={handleGetSuggestions} disabled={isLoadingSuggestions} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Zap className="mr-2 h-4 w-4" />
                      {isLoadingSuggestions ? '...' : 'AI Suggest'}
                  </Button>
                  <CollapsibleTrigger asChild>
                      <Button variant="outline" size="icon">
                          <SlidersHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle Filters</span>
                      </Button>
                  </CollapsibleTrigger>
              </div>
              {suggestions && (
                  <div className="text-sm p-3 bg-muted/50 rounded-md border border-dashed">
                      <p className="font-semibold text-primary mb-1">AI Suggestion:</p>
                      <p className="text-muted-foreground">{suggestions}</p>
                  </div>
              )}
          </div>
          <CollapsibleContent className="pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <Select value={vehicleType} onValueChange={setVehicleType}>
                          <SelectTrigger id="vehicleType">
                              <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="all">All Vehicle Types</SelectItem>
                              <SelectItem value="Dry Van">Dry Van</SelectItem>
                              <SelectItem value="Reefer">Reefer</SelectItem>
                              <SelectItem value="Flatbed">Flatbed</SelectItem>
                              <SelectItem value="Box Truck">Box Truck</SelectItem>
                          </SelectContent>
                      </Select>
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="weight">Max Weight ({maxWeight.toLocaleString()} lbs)</Label>
                      <Slider
                          id="weight"
                          min={5000}
                          max={50000}
                          step={1000}
                          value={[maxWeight]}
                          onValueChange={(value) => setMaxWeight(value[0])}
                      />
                  </div>
              </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
