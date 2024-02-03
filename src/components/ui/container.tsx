import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Container({ children }: Props) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}
