/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidation } from '@/zod.validation/register.validation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import { registerUser } from '@/service/authService'

function RegisterForm() {
  type TRegisterProps = {
    username: string
    email: string
    password: string
    confirmPassword: string
    role: "tenant" | "landlord"
  }

  const form = useForm<TRegisterProps>({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      username: "roton",
      email: "roton1@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      role: "tenant",
    }
  })

  const password = form.watch('password')
  const confirmPassword = form.watch('confirmPassword')
  const onSubmit = async (data: TRegisterProps) => {
    try {
    console.log(data)
    const response = await registerUser(data); // Call the function here
    console.log(response);
  } catch (err) {
    console.error('Failed to register user', err);
  }
};

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          {/* Username Field */}
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='Username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Email Field */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Role Field */}
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select your Account Type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='tenant'>Tenant</SelectItem>
                    <SelectItem value='landlord'>Landlord</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Password Field */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Password' {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder='Confirm Password' {...field} type="password" />
                </FormControl>
                {
                  confirmPassword && password !== confirmPassword ? <FormMessage>Password does not match</FormMessage> : <FormMessage/>
                }
                <FormMessage />
              </FormItem>
            )}
          />
          
          
          {/* Submit Button */}
          <Button
            disabled={confirmPassword && password !== confirmPassword ? true : false}
            type='submit'>Submit</Button>
        </form>
      </Form>

      <h1>
        Do you have no account?{' '}
        <Link href={'/login'}>
          <span className='font-bold'>Login Now</span>
        </Link>
      </h1>
    </div>
  )
}

export default RegisterForm
