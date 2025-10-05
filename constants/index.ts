// constants/index.ts

import { PropertyProps } from "@/interfaces";

// Sample property listings
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "cozy-cottage-1",
    name: "Cozy Cottage",
    slug: "cozy-cottage",
    rating: 4.8,
    address: {
      city: "Addis Ababa",
      country: "Ethiopia",
    },
    image: "/images/cottage-1.jpg",
    images: [
      "/images/cottage-1.jpg",
      "/images/cottage-2.jpg",
      "/images/cottage-3.jpg",
      "/images/cottage-4.jpg",
    ],
    description:
      "A warm and comfortable cottage near the city center. Perfect for couples and solo travelers. Enjoy cozy interiors, a private garden, and free parking.",
    category: ["WiFi", "Kitchen", "Free Parking", "Washer", "Heating", "TV"],
    price: 70,
    reviews: [
      {
        name: "Selam Tesfaye",
        rating: 5,
        comment:
          "Amazing stay! The host was incredibly kind and the place was spotless. Will definitely come back.",
        avatar: "/images/avatar1.jpg",
        date: "2025-08-12",
      },
      {
        name: "David Kim",
        rating: 4,
        comment:
          "Great location, very cozy cottage. Minor issue with the shower, but it was fixed quickly.",
        avatar: "/images/avatar2.jpg",
        date: "2025-07-20",
      },
    ],
    host: {
      name: "Hanna",
      avatar: "/images/host.jpg",
      about:
        "I love hosting travelers and sharing local culture. I’ve been hosting for 3 years and always aim to make guests feel at home.",
    },
  },

  {
    id: "urban-loft-2",
    name: "Urban Loft Apartment",
    slug: "urban-loft",
    rating: 4.6,
    address: {
      city: "Nairobi",
      country: "Kenya",
    },
    image: "/images/loft-1.jpg",
    images: [
      "/images/loft-1.jpg",
      "/images/loft-2.jpg",
      "/images/loft-3.jpg",
      "/images/loft-4.jpg",
    ],
    description:
      "Modern and bright loft apartment in the heart of the city. Features open-plan living, modern kitchen, and panoramic city views.",
    category: ["Air Conditioning", "Elevator", "Gym Access", "WiFi", "Workspace"],
    price: 95,
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment:
          "Loved the modern design and the view! Perfect for remote working and exploring the city.",
        avatar: "/images/avatar3.jpg",
        date: "2025-09-05",
      },
    ],
    host: {
      name: "Michael",
      avatar: "/images/host2.jpg",
      about:
        "Tech enthusiast and avid traveler. I enjoy connecting with guests and helping them discover hidden city gems.",
    },
  },
];
