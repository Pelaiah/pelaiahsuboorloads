'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
         <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Full Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-transparent border-0 border-b rounded-none px-1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Email address</FormLabel>
              <FormControl>
                <Input {...field} className="bg-transparent border-0 border-b rounded-none px-1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} className="bg-transparent border-0 border-b rounded-none px-1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg h-12 rounded-lg mt-8">
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
