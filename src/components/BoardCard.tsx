export default function BoardCard({name, position, headshot}: { name: string, position: string, headshot: string }) {
    return (
        <>
            <div
                className='flex flex-row items-center w-full bg-gray-950 rounded-2xl border-3 border-indigo-400 p-6 gap-6 mb-8'>
                {/* Image */}
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shrink-0'
                />
                {/* Text Content */}
                <div
                    className='flex flex-col justify-center text-left'>
                    <div className='text-5xl text-white font-bold'>
                        {name}
                    </div>
                    <div className='text-5xl text-stone-300'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

