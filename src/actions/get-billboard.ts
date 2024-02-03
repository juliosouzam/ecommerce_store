import type { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(billboardId: string): Promise<Billboard> {
  const response = await fetch(`${URL}/${billboardId}`);
  const data = await response.json();

  return data;
}
