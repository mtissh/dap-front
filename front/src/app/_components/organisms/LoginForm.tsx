'use client';

import { FormProvider } from 'react-hook-form';
import { Button, LinkText } from '../atoms';
import { FormField } from '../molecules';
import { useUserLogin } from '@/hooks/useUserLogin';

export const LoginForm = () => {
  const { methods, onSubmit } = useUserLogin();
  const { handleSubmit, formState: { isValid, isSubmitting } } = methods;

  return (
    <FormProvider {...methods}>
      <form
        method='POST'
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <h1 className='mx-0 my-[4%] text-center text-xl font-bold'>利用者ログイン</h1>
        <FormField
          id='email'
          name='email'
          label='メールアドレス'
          type='text'
          placeholder='abcde@1example.com'
        />
        <FormField
          id='password'
          name='password'
          label='パスワード'
          type='password'
          placeholder='パスワードを入力'
        />
        <Button isDisabled={!isValid || isSubmitting}>ログイン</Button>
        <p className='text-center mt-[7%] md:mt-[25px]'>
          <LinkText href={'#'}>パスワードをお忘れの方はこちら</LinkText>
        </p>
      </form>
    </FormProvider>
  );
};