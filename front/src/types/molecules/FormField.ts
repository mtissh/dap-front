import { FieldValues, Path } from 'react-hook-form';

export interface FormFieldProps<T extends FieldValues> {
  id: string;
  name: Path<T>
  label: string;
  type: string;
  placeholder?: string;
}