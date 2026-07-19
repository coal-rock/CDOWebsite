import React from 'react'
import {Link} from "react-router";

interface ButtonProps {
    text: string
    variant?: 'primary' | 'outline'
    icon?: React.ReactNode
    showArrow?: boolean
    to?: string
    onClick?: () => void
}

export default function Button({text, variant = 'primary', icon, showArrow, to, onClick}: ButtonProps) {

    const baseStyles = 'text-xl flex justify-center items-center font-medium py-2 w-full rounded transition-colors tracking-wide cursor-pointer'

    const primaryStyles = 'bg-indigo-600 hover:bg-indigo-500'
    const outlineStyles = 'bg-transparent border border-white text-stone-300 hover:bg-gray-800'

    const finalStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles}`

    const innerContent = (
        <>
            {icon}
            {text}
            {showArrow && (
                <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 24 24' fill='none'
                     className='ml-2'>
                    <path d='M4 12H20M20 12L16 8M20 12L16 16' stroke='currentColor' strokeWidth='2'
                          strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            )}
        </>
    )

    if (to) {
        return (
            <Link
                to={to}
                className={finalStyles}
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
                {innerContent}
            </Link>
        )
    }

    return (
        <button className={finalStyles} onClick={onClick}>
            {innerContent}
        </button>
    )
}