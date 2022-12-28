import { ReactElement } from "react"

export type ButtonSize = 'md' | 'sm' | 'lg'

export interface ButtonProps {
  children: string
  onClick: () => any
  variant?: 'primary' | 'secondary' 
  size?: ButtonSize
  disabled?: boolean
  withIcon?: boolean
  className?: string 
}