'use client'
import FormContainer from '@/src/components/form/FormContainer'
import FormInput from '@/src/components/form/FormInput'
import React from 'react'
import LoginImage from '@/public/images/login.jpg'
import Image from 'next/image'
import { Zap } from 'lucide-react'
import { SubmitButton } from '@/src/components/form/SubmitButton'
import { SocialIcon } from 'react-social-icons'

const SignupPage = () => {
  const handleLogin = async (prevState: any, formData: FormData) => {
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    return {
      message: 'Login success!',
    }
  }

  return (
    <div className="bg-gradient-to-t from-[#16112B] to-[#2D2453] h-screen w-full flex items-center ">
      <div className="lg:mx-20 md:mx-10 bg-white rounded-2xl">
        <div className="grid lg:grid-cols-2">
          <Image src={LoginImage} alt="Login image" className="w-full h-full rounded-2xl" objectFit="cover" />
          <div className="border p-8 rounded-2xl">
            <div>
              <FormContainer action={handleLogin}>
                <div className="md:mx-20 mx-10">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="bg-white rounded-full">
                      <Zap className="text-[#221C38] w-16 h-16" />
                    </div>
                    <span className="font-bold md:text-2xl text-xl">GoStock</span>
                  </div>
                  <p className="md:text-2xl text-xl text-center mb-4 font-semibold">Register to our GoStock</p>
                  <p className="text-center text-gray-500 my-2">Monitor the stocks easily and accurately</p>
                  <FormInput type="text" placeholder="Nguyen Van A" name="name" label="Your fullname" />
                  <FormInput type="text" placeholder="nguyenvana@example.com" name="email" label="Your email" />
                  <FormInput type="text" placeholder="**********" name="password" label="Your password" />
                  <FormInput type="text" placeholder="**********" name="confirmPassword" label="Confirm password" />
                  <SubmitButton
                    text="Sign up"
                    size="lg"
                    className="bg-black dark:bg-white rounded-full mt-3 md:w-1/4 w-1/2 md:p-0"
                  />

                  <div className="flex items-center justify-between">
                    <p className="my-2 text-sm">
                      Do have an account?{' '}
                      <a href="/auth/login" className="text-[#637DFF]">
                        Login
                      </a>
                    </p>
                    <p className="my-6 text-sm">
                      <a href="/auth/register" className="text-[#637DFF]">
                        Forgot your password?
                      </a>
                    </p>
                  </div>
                </div>
              </FormContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
