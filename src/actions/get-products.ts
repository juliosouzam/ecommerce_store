import qs from 'query-string';

import type { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};
export async function getProducts(query: Query): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query,
  });
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
