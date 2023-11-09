import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInputs, loginFormSchema } from '@/schema/loginFormSchema';

export const useUserLogin = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return { methods, onSubmit };
};