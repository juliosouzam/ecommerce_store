'use client';

import { fmtCurrency } from '@/lib/utils';

type Props = {
  value: number;
};

export function Currency({ value }: Props) {
  return <div className="font-semibold">{fmtCurrency(value)}</div>;
}
