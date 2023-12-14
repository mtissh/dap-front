import Link from 'next/link';
import { LinkTextProps } from '@/types/atoms';

export const LinkText = ({ href, children }: LinkTextProps) => (
  <Link href={href} className='text-sm text-blue-400 inline-block underline hover:no-underline'>
    {children}
  </Link>
);