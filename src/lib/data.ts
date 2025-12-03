import { PlaceHolderImages } from '@/lib/placeholder-images';

export type PhoneSpec = {
  storage: string;
  ram: string;
  camera: string;
  display: string;
  battery: string;
  chipset: string;
};

export type Seller = {
  name: string;
  rating: number;
};

export type Phone = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  condition: 'New' | 'Used - Like New' | 'Used - Good';
  specs: PhoneSpec;
  seller: Seller;
};

const phones: Phone[] = [
  {
    id: '1',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    image: PlaceHolderImages.find((p) => p.id === 'phone-1')?.imageUrl || '',
    condition: 'New',
    specs: {
      storage: '256GB',
      ram: '12GB',
      camera: '50MP Triple Camera',
      display: '6.7" Super Actua',
      battery: '5050mAh',
      chipset: 'Google Tensor G3',
    },
    seller: {
      name: 'GadgetGalaxy',
      rating: 4.9,
    },
  },
  {
    id: '2',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    image: PlaceHolderImages.find((p) => p.id === 'phone-2')?.imageUrl || '',
    condition: 'New',
    specs: {
      storage: '512GB',
      ram: '12GB',
      camera: '200MP Quad Camera',
      display: '6.8" Dynamic AMOLED 2X',
      battery: '5000mAh',
      chipset: 'Snapdragon 8 Gen 3',
    },
    seller: {
      name: 'TechEmporium',
      rating: 4.8,
    },
  },
  {
    id: '3',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 1099,
    image: PlaceHolderImages.find((p) => p.id === 'phone-3')?.imageUrl || '',
    condition: 'Used - Like New',
    specs: {
      storage: '256GB',
      ram: '8GB',
      camera: '48MP Pro Camera System',
      display: '6.1" Super Retina XDR',
      battery: '3274mAh',
      chipset: 'A17 Pro',
    },
    seller: {
      name: 'AppleCertified Reseller',
      rating: 5.0,
    },
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    image: PlaceHolderImages.find((p) => p.id === 'phone-4')?.imageUrl || '',
    condition: 'New',
    specs: {
      storage: '256GB',
      ram: '16GB',
      camera: '50MP Hasselblad Triple Camera',
      display: '6.82" 2K AMOLED ProXDR',
      battery: '5400mAh',
      chipset: 'Snapdragon 8 Gen 3',
    },
    seller: {
      name: 'SpeedyPhones',
      rating: 4.7,
    },
  },
  {
    id: '5',
    name: 'Xperia 1 V',
    brand: 'Sony',
    price: 1399,
    image: PlaceHolderImages.find((p) => p.id === 'phone-5')?.imageUrl || '',
    condition: 'Used - Good',
    specs: {
      storage: '256GB',
      ram: '12GB',
      camera: '48MP ZEISS Triple Camera',
      display: '6.5" 4K HDR OLED',
      battery: '5000mAh',
      chipset: 'Snapdragon 8 Gen 2',
    },
    seller: {
      name: 'ProMedia',
      rating: 4.6,
    },
  },
  {
    id: '6',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 599,
    image: PlaceHolderImages.find((p) => p.id === 'phone-6')?.imageUrl || '',
    condition: 'Used - Like New',
    specs: {
      storage: '256GB',
      ram: '12GB',
      camera: '50MP Dual Camera',
      display: '6.7" Flexible LTPO OLED',
      battery: '4700mAh',
      chipset: 'Snapdragon 8+ Gen 1',
    },
    seller: {
      name: 'MinimalistTech',
      rating: 4.8,
    },
  },
];

export function getPhones(): Phone[] {
  return phones;
}

export function getPhoneById(id: string): Phone | undefined {
  return phones.find((phone) => phone.id === id);
}
