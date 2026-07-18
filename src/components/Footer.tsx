import {footerItems} from "../data/navigationData.tsx";

interface FooterItemProps {
    link: string
    svg: React.ReactNode
}

function FooterItem({link, svg}: FooterItemProps) {
    return (
        <a href={link}
           target='_blank'
           rel='noreferrer'
           className='hover:text-white hove:-translate-y-1 transition-all duration-300'
        >
            {svg}
        </a>
    )
}

export default function Footer() {
    return (
        <>
            <div className='w-full flex flex-col items-center mt-auto'>
                {/* Top Border */}
                <hr className='w-full border-t-2 border-indigo-200 opacity-50'/>
                {/* svg Container */}
                <div className='flex items-center gap-4 py-4'>
                    {footerItems.map((item, index) => (
                        <FooterItem key={index} link={item.link} svg={item.svg}/>
                    ))}
                </div>
            </div>
        </>
    )
}