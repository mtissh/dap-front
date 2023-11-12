import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useApiPost } from './useRequest';
import { LoginFormInputs, loginFormSchema } from '@/schema/loginFormSchema';

export const useUserLogin = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onBlur',
  });

  const { postRequest, loading } = useApiPost();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    // TODO: レスポンスの仕様考えておく
    const res = await postRequest<LoginFormInputs, object>('https://demo3919465.mockable.io/post', data, methods.setError);
    if (!res) return;

    // TOP画面へ遷移させる動き
    console.log('ログイン成功');
  };

  return { methods, onSubmit, loading };
};