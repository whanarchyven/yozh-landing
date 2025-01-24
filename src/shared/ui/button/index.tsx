'use client';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonInterface {
  children: ReactNode;
  callback?: () => any;
  className?: string;
}

const Button: FC<ButtonInterface> = ({ children, callback, className }) => {
  return (
    <Link
      href={'https://app.yozh.fun'}
      onClick={() => {
        callback ? callback() : null;
      }}
      className={clsx(
        'bg-cYellow p-3 px-6 flex items-center font-bold justify-center text-cBlack uppercase text-2xl',
        className,
        callback ? 'cursor-pointer' : ''
      )}>
      {children}
    </Link>
  );
};

export default Button;
