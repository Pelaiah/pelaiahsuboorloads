export type Load = {
  id: string;
  origin: {
    city: string;
    state: string;
    lat: number;
    lng: number;
  };
  destination: {
    city: string;
    state: string;
    lat: number;
    lng: number;
  };
  weight: number; // in lbs
  vehicleType: 'Dry Van' | 'Reefer' | 'Flatbed' | 'Box Truck';
  rate: number; // in USD
  pickupDate: string;
  deliveryDate: string;
  distance: number; // in miles
  company: string;
};
