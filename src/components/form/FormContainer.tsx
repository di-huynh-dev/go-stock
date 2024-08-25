'use client'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useToast } from '@/src/components/ui/use-toast'

function FormContainer({ action, children }: { action: actionFunction; children: React.ReactNode }) {
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm()

  const { toast } = useToast()

  const onSubmit = async (data: any) => {
    const result = await action(data)
    if (result.message) {
      toast({
        description: result.message,
      })
      reset() // Reset form after successful submission
    }
  }

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
}

export default FormContainer

export type actionFunction = (data: any) => Promise<{ message: string }>
