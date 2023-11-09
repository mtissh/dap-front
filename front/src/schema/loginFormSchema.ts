import { z } from 'zod';

const email: z.ZodString = z
  .string({ required_error: 'メールアドレスは必ず入力してください。' })
  .min(1, { message: 'メールアドレスは必ず入力してください。' })
  .max(255, { message: 'メールアドレスは255文字以内で入力してください。' })
  .email({ message: '有効なメールアドレスを入力してください。' })
;

const password: z.ZodString = z
  .string({ required_error: 'パスワードは必ず入力してください。' })
  .min(1, { message: 'パスワードは必ず入力してください。' })
;

export const loginFormSchema = z.object({
  email: email,
  password: password,
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;