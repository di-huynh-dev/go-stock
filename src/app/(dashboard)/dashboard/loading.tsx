import Loading from '@/src/components/loading'
import React from 'react'

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}
const loading = ({ size = 24, className, ...props }: ISVGProps) => {
  return <Loading />
}

export default loading
