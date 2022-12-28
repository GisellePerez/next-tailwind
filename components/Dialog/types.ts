import { ReactElement } from "react"

export interface DialogProps {
  title: string
  children: ReactElement | ReactElement[] 
  onClose: () => any 
  visible: boolean
}