export interface BoardCardProps {
    name: string
    bio: string,
    boardPosition: string
    headshot: string
}

export function BoardCard({ name, bio, boardPosition, headshot }: BoardCardProps) {
    return (
        <>
            <div className="flex flex-col border border-[#e0e0e0]">
                <div
                    className='flex min-w-0 flex-row items-center'>

                    <div className="aspect-square w-[44%] shrink-0 object-cover sm:w-1/3 p-4">
                        <img
                            src={headshot}
                            alt={`${name}'s headshot`}
                            className='rounded'
                        />
                    </div>

                    <div
                        className='flex min-w-0 flex-col justify-center px-4 text-left sm:px-5'>
                        <div className='break-words text-lg font-bold leading-tight text-[#e0e0e0] sm:text-xl md:text-2xl'>
                            {name}
                        </div>

                        <div className='mt-1 text-base leading-tight text-[#e0e0e0] sm:text-lg md:text-xl'>
                            {boardPosition}
                        </div>
                    </div>
                </div>

                <div className="text-base text-[#e0e0e0] p-4 pt-0">
                    {bio}
                </div>
            </div>
        </>
    )
}

export interface AlumniCardProps {
    name: string,
    headshot: string,
    jobTitle: string,
    company: string,
}

export function AlumniCard({ name, headshot, jobTitle, company }: AlumniCardProps) {
    return (
        <>
            <div
                className='flex min-w-0 flex-row items-center border border-[#e0e0e0]'>
                <div className="aspect-square w-[44%] shrink-0 object-cover sm:w-1/3 p-4">
                    <img
                        src={headshot}
                        alt={`${name}'s headshot`}
                        className='rounded'
                    />
                </div>
                <div
                    className='flex min-w-0 flex-col justify-center px-4 text-left sm:px-5'>
                    <div className='break-words text-lg font-bold leading-tight text-[#e0e0e0] sm:text-xl md:text-2xl'>
                        {name}
                    </div>

                    <div className='mt-1 text-base leading-tight text-[#e0e0e0] sm:text-lg md:text-xl'>
                        {jobTitle} @ {company}
                    </div>
                </div>
            </div>
        </>
    )
}
