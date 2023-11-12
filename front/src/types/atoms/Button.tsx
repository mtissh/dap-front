export interface ButtonProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
  isDisabled?: boolean;
}