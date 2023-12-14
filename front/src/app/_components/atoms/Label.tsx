import { LabelProps } from '@/types/atoms';

export const Label = ({ htmlFor, children }: LabelProps) => (
  <label
    className='block text-gray-700 text-sm font-bold mb-2'
    htmlFor={htmlFor}
  >
    {children}
  </label>
);