import {useState} from "react";

function AccordionItem({title}: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='border-b-2 border-indigo-300'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-full flex justify-between items-center py-8 text-white font-medium text-4xl hover:text-indigo-300 transition-colors text-left'
                >
                    {title}
                    <svg
                        className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${isOpen ? '-rotate-z-180' : ''}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='3'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7'/>
                    </svg>
                </button>
                {isOpen && (
                    <div className='pb-6 text-stone-300 text-lg'>
                        Placeholder content for {title}
                    </div>
                )}
            </div>
        </>
    )
}

export default function AccordionMenu({items}: { items: string[] }) {
    return (
        <>
            <div className='w-full max-w-3xl mx-auto p-6 rounded-xl'>
                {items.map((item, index) => (
                    <AccordionItem key={index} title={item}/>
                ))}
            </div>
        </>
    )
}
