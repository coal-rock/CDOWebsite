export default function Card({ title, image, body }: { title: string, image: string, body: string }) {
    return (
        <>
            <div className="flex flex-col items-center gap-2 2xl">
                <div className="text-2xl text-white">
                    {title}
                </div>

                <div className="flex flex-col items-center rounded w-full">
                    <img className="h-50 transition-all hover:scale-y-200 hover:rotate-9000 duration-10000" src={image} />
                    {/* <hr className="w-full h-1 text-white" /> */}

                    <div className="flex flex-col p-4 md:p-0 items-center">
                        <div className="text-xl text-stone-100 text-center md:text-left">
                            {body}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
