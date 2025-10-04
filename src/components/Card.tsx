export default function Card({ title, image, body }: { title: string, image: string, body: string }) {
    return (
        <>
            <div className="flex flex-col items-center border-1 border-indigo-600 rounded">
                <img className="w-50 h-50" src={image} />
                <hr className="w-full h-1 text-white" />

                <div className="flex flex-col p-4 items-center">
                    <div className="text-2xl text-white">
                        {title}
                    </div>

                    <div className="text-xl text-stone-100">
                        {body}
                    </div>
                </div>
            </div>

        </>
    )
}
