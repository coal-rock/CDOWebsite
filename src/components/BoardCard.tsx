interface BoardCardProps {
    name: string
    position: string
    headshot: string
}

export default function BoardCard({ name, position, headshot }: BoardCardProps) {
    return (
        <>
            <div
                className='flex flex-row items-center border-1 border-[#e0e0e0] gap-4'>
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='w-1/2 object-cover shrink-0'
                />
                <div
                    className='flex flex-col justify-center text-left'>
                    <div className='text-xl md:text-2xl font-bold text-[#e0e0e0]'>
                        {name}
                    </div>
                    <div className='text-lg md:text-xl text-[#e0e0e0]'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

