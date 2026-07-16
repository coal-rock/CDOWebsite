import {Link} from 'react-router'
import React from 'react'

interface FeatureProps {
    title: string
    description: string
    linkText: string
    linkUrl: string
    icon: React.ReactNode
}

export default function FeatureBlock({title, description, linkText, linkUrl, icon}: FeatureProps) {
    return (
        <div className='flex flex-col gap-6 w-full mt-8 px-4'>
            <div className='flex items-center'>
                {icon}
                <h3 className='text-3xl text-white font-medium ml-6>'>{title}</h3>
            </div>
            <p className='text-white'>
                {description}
            </p>
            <Link to={linkUrl}
                  className='text-[#A5B4FC] font-mono font-bold tracking-widest text-xl hover:text-white transition-colors mt-2'
            >
                {linkText} &rarr
            </Link>
            <hr className='w-3/4 mx-auto border-t-2 border-gray-600 mt-4'/>
        </div>
    )
}