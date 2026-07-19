interface BoardCardProps {
    name: string
    position: string
    headshot: string
}

export default function BoardCard({name, position, headshot}: BoardCardProps) {
    return (
        <>
            <div
                className='flex flex-row items-center border-1 rounded-lg border-indigo-400 p-2 gap-4'>
                {/* Image */}
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='w-1/2 object-cover rounded-lg shrink-0'
                />
                {/* Text Content */}
                <div
                    className='flex flex-col justify-center text-left'>
                    <div className='text-xl md:text-2xl font-bold'>
                        {name}
                    </div>
                    <div className='text-lg md:text-xl text-stone-300'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

