import { MouseEventHandler, ReactElement } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
  className?: string;
};

export function IconButton({ className, icon, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className,
      )}
    >
      {icon}
    </button>
  );
}
