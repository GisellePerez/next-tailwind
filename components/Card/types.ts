export interface CardProps {
  title: string
  description: string
  variant: 'primary' | 'secondary'
  onClick?: () => any
}