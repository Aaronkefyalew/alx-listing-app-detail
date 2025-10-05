// interfaces/index.ts

// Address structure for properties
export interface Address {
  street?: string;
  city: string;
  country: string;
}

// Review interface
export interface Review {
  name: string;
  rating: number; // Rating between 1–5
  comment: string;
  avatar?: string; // User profile image URL
  date?: string; // Optional review date
}

// Host interface
export interface Host {
  name: string;
  avatar?: string;
  about?: string;
}

// Main Property interface
export interface PropertyProps {
  id: string;
  name: string;
  slug?: string;
  rating: number;
  address: Address;
  image: string; // main image URL
  images?: string[]; // gallery images
  description: string;
  category: string[]; // amenities
  price: number; // nightly price
  reviews?: Review[]; // list of reviews
  host?: Host; // optional host data
}
