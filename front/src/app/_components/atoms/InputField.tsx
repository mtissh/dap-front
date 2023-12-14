import { FieldValues, useFormContext } from 'react-hook-form';
import { InputFieldProps } from '@/types/atoms';

export const InputField = <T extends FieldValues>({
  name,
  type,
  id,
  placeholder,
}: InputFieldProps<T>) => {
  const { register, formState: { errors } } = useFormContext<T>();
  return (
    <>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <div className='text-red-500 pl-1 pt-1 text-xs'>
          {errors[name]?.message as string}
        </div>
      )}
    </>
  );
};