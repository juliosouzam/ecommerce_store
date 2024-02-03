import type { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
