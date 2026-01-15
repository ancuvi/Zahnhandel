import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  className?: string
}

const Card = ({ title, description, icon, children, className = '' }: CardProps) => {
  return (
    <div className={`group h-full rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-primary-50 hover:border-primary-100 ${className}`}>
      <div className="flex flex-col items-start gap-4">
        {icon && (
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-50 text-secondary-600 transition-colors group-hover:bg-secondary-100 group-hover:text-secondary-700">
            {icon}
          </div>
        )}
        <div className="space-y-3 w-full">
          <h3 className="text-xl font-bold text-stone-800 font-serif group-hover:text-primary-800 transition-colors">{title}</h3>
          {description && <p className="text-base text-stone-600 leading-relaxed">{description}</p>}
        </div>
      </div>
      {children && <div className="mt-6 text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">{children}</div>}
    </div>
  )
}

export default Card
