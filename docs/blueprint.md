# **App Name**: Sulboor Load Board

## Core Features:

- Real-time Load Notifications: Instant alerts via push notification when new loads matching driver's criteria are posted. Relies on Supabase real-time capabilities.
- Map-Based Load Search: A map interface using react-native-maps to visualize available loads nearby, allowing drivers to easily find opportunities along their route. Features geolocation and reverse geocoding.
- Advanced Search & Filter: Drivers can filter loads based on origin, destination, weight, and vehicle type to find the most suitable options using a search box or dynamic filtering tool, which uses generative AI to reason about different parameters as they interact with each other to create highly relevant search suggestions.
- Counter-Offer System: A negotiation engine allowing drivers to bid on loads and shippers to accept, reject, or counter bids, fostering price discovery. Digital confirmation with signature upon agreement using a signature capture form.
- In-Drive Trip Logic: Ability for drivers to set their destination and find available back-haul loads along the route.
- Deep Linking: Direct navigation to a specific load from a URL.

## Style Guidelines:

- Color palette: Dark mode with a primary color of bright orange (#FF9100) for high visibility and a sense of urgency.
- Background color: Very dark gray (#121212) to reduce eye strain and enhance the contrast of UI elements.
- Accent color: Electric blue (#7DF9FF) for interactive elements and calls to action, complementing the orange and dark theme.
- Body and headline font: 'Inter', a versatile sans-serif, ensuring readability and a modern look across the app.
- Use minimalist, high-contrast icons to clearly represent load attributes, navigation items, and actions.
- Map-centric layout with a bottom sheet for load listings, following the InDrive aesthetic. Thumb-friendly action buttons are implemented for quick interactions.
- Implement smooth transitions using react-native-reanimated, including the bottom sheet reveal and button presses.