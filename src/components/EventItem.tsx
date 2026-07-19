import React from 'react'

interface EventProps {
    title: string
    date: React.ReactNode
    icon: React.ReactNode
}

export default function EventItem({ title, date, icon }: EventProps) {
    return (
        <div className='flex items-center'>
            {icon}
            <h3 className='text-xl font-light ml-6'>
                <div className='font-medium'>{title}</div>{date}
            </h3>
        </div>
    )
}