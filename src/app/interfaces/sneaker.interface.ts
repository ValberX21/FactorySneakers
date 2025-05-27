export interface Sneaker {
  id: number;
  model_name: string;
  sku: string;
  sizes_available: string[];
  colors: string[];
  material: string;
  price: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}
