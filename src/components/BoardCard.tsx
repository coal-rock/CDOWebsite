interface BoardCardProps {
    name: string
    position: string
    headshot: string
}

export default function BoardCard({ name, position, headshot }: BoardCardProps) {
    return (
        <>
            <div
                className='flex min-w-0 flex-row items-center border border-[#e0e0e0]'>
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='aspect-square w-[44%] shrink-0 object-cover sm:w-1/2'
                />
                <div
                    className='flex min-w-0 flex-col justify-center px-4 text-left sm:px-5'>
                    <div className='break-words text-lg font-bold leading-tight text-[#e0e0e0] sm:text-xl md:text-2xl'>
                        {name}
                    </div>
                    <div className='mt-1 text-base leading-tight text-[#e0e0e0] sm:text-lg md:text-xl'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}
