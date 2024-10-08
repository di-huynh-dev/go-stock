import FormInput from '@/src/components/form/FormInput'
import { SubmitButton } from '@/src/components/form/SubmitButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import Link from 'next/link'
import React from 'react'

const VerifyOTPPage = () => {
  return (
    <div className="bg-gradient-to-t from-[#16112B] to-[#2D2453] h-screen w-full flex items-center">
      <Card className=" mx-auto flex  items-center">
        <CardHeader>
          <CardTitle className="text-center">Forgot Password</CardTitle>
          <CardContent>
            <p className="text-sm text-slate-500 my-4">Enter your email and we will send you a password reset link</p>
            <FormInput type="text" placeholder="nguyenvana@example.com" name="email" label="Your registered email" />
            <Link href="/auth/forgot-password/verify-otp">
              <SubmitButton
                text="Get OTP"
                size="lg"
                className="bg-black dark:bg-white rounded-full mt-3 w-1/2 md:p-0"
              />
            </Link>
          </CardContent>
          <Link href="/auth/login" className="text-[#637DFF] text-center">
            Back to Sign in
          </Link>
        </CardHeader>
      </Card>
    </div>
  )
}

export default VerifyOTPPage
