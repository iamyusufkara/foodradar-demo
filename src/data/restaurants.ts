export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  features: {
    vegetarian: boolean;
    vegan: boolean;
    delivery: boolean;
    takeaway: boolean;
  };
  images: {
    cover: string;
    gallery: string[];
  };
};

export const restaurants: Restaurant[] = [
  {
    id: 'rest-101',
    name: 'Urban Spoon',
    cuisine: 'International',
    rating: 4.6,
    priceRange: '€€',
    address: {
      street: 'Lindenstraße 45',
      city: 'Berlin',
      zip: '10969',
      country: 'Deutschland',
    },
    geo: { lat: 52.5031, lng: 13.4119 },
    features: {
      vegetarian: true,
      vegan: true,
      delivery: true,
      takeaway: true,
    },
    images: {
      cover: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      gallery: [
        'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      ],
    },
  },
  {
    id: 'rest-102',
    name: 'Bella Roma',
    cuisine: 'Italian',
    rating: 4.3,
    priceRange: '€€',
    address: {
      street: 'Italiener Weg 7',
      city: 'Hamburg',
      zip: '20095',
      country: 'Deutschland',
    },
    geo: { lat: 53.5511, lng: 9.9937 },
    features: {
      vegetarian: true,
      vegan: false,
      delivery: true,
      takeaway: true,
    },
    images: {
      cover: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      gallery: ['https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg'],
    },
  },
  {
    id: 'rest-103',
    name: 'Green Leaf',
    cuisine: 'Vegan',
    rating: 4.8,
    priceRange: '€',
    address: {
      street: 'Neumarkt 3',
      city: 'Köln',
      zip: '50667',
      country: 'Deutschland',
    },
    geo: { lat: 50.9375, lng: 6.9603 },
    features: {
      vegetarian: true,
      vegan: true,
      delivery: false,
      takeaway: true,
    },
    images: {
      cover: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      gallery: ['https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg'],
    },
  },
];

export const menus = [
  {
    restaurantId: 'rest-101',
    categories: [
      {
        id: 'cat-1',
        name: 'Vorspeisen',
        items: [
          {
            id: 'item-101',
            name: 'Avocado Bruschetta',
            description: 'Sauerteigbrot mit Avocado & Tomaten',
            price: 6.9,
            currency: 'EUR',
            image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
          },
        ],
      },
    ],
  },
  {
    restaurantId: 'rest-102',
    categories: [
      {
        id: 'cat-2',
        name: 'Pizza',
        items: [
          {
            id: 'item-201',
            name: 'Pizza Margherita',
            description: 'Tomate, Mozzarella, Basilikum',
            price: 9.5,
            currency: 'EUR',
            image: 'https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg',
          },
        ],
      },
    ],
  },
  {
    restaurantId: 'rest-103',
    categories: [
      {
        id: 'cat-3',
        name: 'Bowls',
        items: [
          {
            id: 'item-301',
            name: 'Vegan Buddha Bowl',
            description: 'Quinoa, Kichererbsen, Avocado',
            price: 11.9,
            currency: 'EUR',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
          },
        ],
      },
    ],
  },
];

export const reviews = [
  {
    id: 'rev-1',
    restaurantId: 'rest-101',
    user: 'Max M.',
    rating: 5,
    comment: 'Mega Atmosphäre und tolles Essen!',
    createdAt: '2026-01-10T18:30:00Z',
  },
  {
    id: 'rev-2',
    restaurantId: 'rest-103',
    user: 'Laura K.',
    rating: 4,
    comment: 'Sehr lecker, aber etwas teuer.',
    createdAt: '2026-01-22T12:15:00Z',
  },
];

export const meta = {
  apiVersion: '1.0',
  generatedAt: '2026-02-02T12:00:00Z',
};
