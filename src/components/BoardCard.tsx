export default function BoardCard({name, position, headshot}: { name: string, position: string, headshot: string }) {
    return (
        <>
            <div
                className='flex flex-row items-center w-full bg-gray-950 rounded border border-indigo-400 p-4 gap-6 mb-8'>
                {/* Image */}
                <img
                    src={headshot}
                    alt={`${name}'s headshot`}
                    className='w-32 h-32 object-cover rounded'
                />
                {/* Text Content */}
                <div
                    className='flex flex-col justify-center text-left'>
                    <div className='text-xl text-white font-bold'>
                        {name}
                    </div>
                    <div className='text-xl text-stone-300'>
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

