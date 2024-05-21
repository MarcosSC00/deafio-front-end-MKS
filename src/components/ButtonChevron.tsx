import { ComponentProps } from 'react'

interface ButtonChevronProps extends ComponentProps<'button'> {}

export function ButtonChevron({ ...props }: ButtonChevronProps) {
  return <button {...props} className="rounded-full bg-[#0F52BA20] h-min" />
}
