import { ButtonProps } from '@/types/atoms';

export const Button = ({ type, children, isDisabled }: ButtonProps) => (
  <button 
    className={`w-full bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    type={type}
    disabled={isDisabled}
  >
    {children}
  </button>
);