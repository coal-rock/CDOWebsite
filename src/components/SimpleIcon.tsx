import type { SVGProps } from 'react'
import type { SimpleIcon as SimpleIconDefinition } from 'simple-icons'

interface SimpleIconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
    icon: SimpleIconDefinition
    label: string
}

export default function SimpleIcon({ icon, label, ...props }: SimpleIconProps) {
    return (
        <svg
            role='img'
            viewBox='0 0 24 24'
            fill='currentColor'
            aria-label={label}
            {...props}
        >
            <path d={icon.path}/>
        </svg>
    )
}
