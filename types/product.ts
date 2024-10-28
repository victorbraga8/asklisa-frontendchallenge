export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Params {
  id: string;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductContextType {
  defaultData: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  minPrice: number;
  maxPrice: number;
  setPriceRange: (range: number[]) => void;
  priceRange: number[];
}

export interface ProductDetailsProps {
  params: { id: string };
}
