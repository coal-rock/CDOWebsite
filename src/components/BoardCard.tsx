export default function BoardCard({ name, position, headshot }: { name: string, position: string, headshot: string }) {
    return (
        <>

            <div className="flex flex-col w-60 h-80">
                <img src={headshot} className="rounded-t-xl h-60" />
                <div className="bg-gray-950 w-full rounded-b-xl h-full border-indigo-400 border-1 font-mono flex flex-col items-center p-1">
                    <div className="font-bold">
                        {name}
                    </div>

                    <div className="text-stone-100">
                        {position}
                    </div>
                </div>
            </div>
        </>
    )
}

