import { ReactElement } from "react"

export interface AlertProps {
  title: string
  children: ReactElement | ReactElement[] 
  onClose: () => any 
  visible: boolean
}