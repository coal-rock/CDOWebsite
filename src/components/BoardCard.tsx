export default function BoardCard({name, position, headshot}: { name: string, position: string, headshot: string }) {
    return (
        <>
            <div
                className='flex flex-row items-center w-full bg-gray-950 border rounded-lg border-indigo-400/60 p-2 gap-4 mb-4'>
                {/* Image */}
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='w-32 h-32 object-cover rounded-lg'
                />
                {/* Text Content */}
                <div
                    className='flex flex-col justify-center text-left'>
                    <div className='text-l text-white font-bold'>
                        {name}
                    </div>
                    <div className='text-l text-stone-300'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

