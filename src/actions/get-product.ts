import type { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(productId: string): Promise<Product> {
  const response = await fetch(`${URL}/${productId}`);
  const data = await response.json();

  return data;
}
