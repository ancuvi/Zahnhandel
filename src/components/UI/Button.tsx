import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

type ButtonProps<T extends ElementType = 'button'> = {
  variant?: ButtonVariant
  children: ReactNode
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children'>

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600 active:bg-primary-800 shadow-md hover:shadow-lg',
  secondary:
    'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:outline-secondary-500 active:bg-secondary-700 shadow-md hover:shadow-lg',
  ghost: 'bg-transparent text-stone-600 hover:text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-600',
  outline: 'bg-transparent border-2 border-primary-600 text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-600',
}

const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  children,
  className = '',
  as,
  ...props
}: ButtonProps<T>) => {
  const Component = (as || 'button') as ElementType

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
