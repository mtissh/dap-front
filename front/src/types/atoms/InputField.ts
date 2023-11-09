import { FieldValues, Path } from 'react-hook-form';

export interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  type: string;
  id?: string;
  placeholder?: string;
}