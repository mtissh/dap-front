import { FieldValues } from 'react-hook-form';
import { InputField, Label } from '@/app/_components/atoms';
import { FormFieldProps } from '@/types/molecules';

export const FormField = <T extends FieldValues>({
  id,
  name,
  label,
  type,
  placeholder,
}: FormFieldProps<T>) => (
    <div className='mb-4'>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
