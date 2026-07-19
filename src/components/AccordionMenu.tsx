import {useState} from "react";

function AccordionItem({title}: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='border-b border-indigo-400'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-xl md:text-2xl font-medium text-left w-full flex justify-between items-center py-4 hover:text-indigo-400 transition-colors cursor-pointer'
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
                    <div className='text-sm md:text-lg pb-4 text-stone-300'>
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
            <div className='w-full max-w-3xl mx-auto rounded-xl py-12'>
                {items.map((item, index) => (
                    <AccordionItem key={index} title={item}/>
                ))}
            </div>
        </>
    )
}
