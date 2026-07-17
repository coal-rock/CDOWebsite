import React from 'react'

interface ButtonProps {
    text: string
    variant?: 'primary' | 'outline'
    icon?: React.ReactNode
    showArrow?: boolean
}

export default function Button({text, variant = 'primary', icon, showArrow}: ButtonProps) {

    const baseStyles = 'text-xl flex justify-center items-center font-medium py-2 w-full rounded transition-colors tracking-wide'

    const primaryStyles = 'bg-brand hover:bg-brand-hover'
    const outlineStyles = 'bg-transparent border border-white text-stone-300 hover:bg-gray-800'

    const finalStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles}`

    return (
        <button className={finalStyles}>
            {icon}
            {text}
            {showArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
        </button>
    )
}