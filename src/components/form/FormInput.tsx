import { Label } from '@/src/components/ui/label'
import { Input } from '@/src/components/ui/input'

type FormInputProps = {
  name: string
  type: string
  label?: string
  placeholder?: string
  defaultValue?: string
  icon?: React.ReactNode
}

function FormInput(props: FormInputProps) {
  const { label, name, type, placeholder, defaultValue, icon } = props

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <div className="flex items-center gap-2">
        {icon}
        <Input id={name} type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} required />
      </div>
    </div>
  )
}

export default FormInput
