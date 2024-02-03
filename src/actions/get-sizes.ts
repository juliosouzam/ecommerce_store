import type { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(): Promise<Size[]> {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
