import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, disabled, type, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition',
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
