'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/src/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/src/components/ui/input-otp'
import { toast } from '@/src/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { FormOTPSchema } from '@/src/lib/zod-schema'

const ForgotPasswordPage = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormOTPSchema>>({
    resolver: zodResolver(FormOTPSchema),
    defaultValues: {
      pin: '',
    },
  })
  function onSubmit(data: z.infer<typeof FormOTPSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    setTimeout(() => {
      router.push('/auth/forgot-password/reset-password')
    }, 1000)
  }

  return (
    <div className="bg-gradient-to-t from-[#16112B] to-[#2D2453] h-screen w-full flex items-center">
      <Card className=" mx-auto flex  items-center">
        <CardHeader>
          <CardTitle className="text-center">Verify OTP</CardTitle>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>Please enter the one-time password sent to your phone.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
          <Link href="/auth/login" className="text-[#637DFF] text-center">
            Back to Sign in
          </Link>
        </CardHeader>
      </Card>
    </div>
  )
}

export default ForgotPasswordPage
