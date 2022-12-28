import { ReactElement } from "react";

export interface IconButtonProps {
  children: ReactElement
  ariaLabel: string
  onClick: () => any
}