import { Icons } from '../components/dashboard/Icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
  subItems?: NavItem[]
}
