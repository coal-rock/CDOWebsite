import React from 'react'
import {Link} from 'react-router'

interface FeatureProps {
    title: string
    description: string
    linkText: string
    linkUrl: string
    icon: React.ReactNode
}

export default function FeatureBlock({title, description, linkText, linkUrl, icon}: FeatureProps) {
    return (
        <div className='flex flex-col gap-6 w-full px-2 h-full'>
            <div className='flex items-center'>
                {icon}
                <h3 className='text-3xl font-medium ml-6'>{title}</h3>
            </div>
            <p className='text-stone-300 flex-grow text-lg md:text-2xl'>
                {description}
            </p>
            <Link to={linkUrl}
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className='whitespace-nowrap inline-flex items-center gap-2 text-indigo-400 font-mono font-bold tracking-widest text-lg md:text-xl hover:text-white transition-colors mt-2'
            >
                {linkText}
                <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 24 24' fill='none'>
                    <path d='M4 12H20M20 12L16 8M20 12L16 16' stroke='currentColor' strokeWidth='2'
                          strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
            </Link>
            <hr className='w-3/4 md:w-full mx-auto border-1 border-stone-300 mt-4'/>
        </div>
    )
}