import React from 'react'

interface EventProps {
    title: string
    date: string
    icon: React.ReactNode
}

export default function EventItem({ title, date, icon }: EventProps) {
    return (
        <div className='flex items-center'>
            {icon}
            <h3 className='text-xl font-light ml-6'>
                {title}<br/>{date}
            </h3>
        </div>
    )
}