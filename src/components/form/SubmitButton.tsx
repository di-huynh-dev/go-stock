'use client'
import { Loader } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/src/components/ui/button'

type btnSize = 'default' | 'sm' | 'lg'
type SubmitButtonProps = {
  className?: string
  text?: string
  size: btnSize
}
export function SubmitButton({ className = '', text = 'Submit', size = 'lg' }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button className={`capitalize ${className}`} type="submit" disabled={pending} size={size}>
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}
