import { ReactElement } from "react"

export interface ButtonProps {
  children: string
  onClick: () => any
  variant?: 'primary' | 'secondary' 
  disabled?: boolean,
}