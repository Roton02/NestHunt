import { z } from 'zod'

export const registerValidation = z
  .object({
    username: z
      .string({ required_error: 'username is required' })
      .min(4, 'Username must be at least 4 characters')
      .max(20, 'Username must be at most 20 characters'),

    email: z
      .string({ required_error: 'email is required' })
      .email('Invalid email address'),

    password: z
      .string({ required_error: 'password is required' })
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),

    confirmPassword: z
      .string({ required_error: 'confirm password is required' })
      .min(8, 'Confirm password must be at least 8 characters')
      .max(20, 'Confirm password must be at most 20 characters'),

    role: z.enum(['tenant', 'landlord'], {
      required_error: 'role is required',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
      })
    }
  })
