import { footerItems } from "../data/navigationData.tsx";

interface FooterItemProps {
    link: string
    svg: React.ReactNode
}

function FooterItem({ link, svg }: FooterItemProps) {
    return (
        <a href={link}
            target='_blank'
            rel='noreferrer'
            className='hover:-translate-y-1 transition-all duration-300'
        >
            {svg}
        </a>
    )
}

export default function Footer() {
    return (
        <>
            <div className='w-full flex flex-col items-center mt-auto'>
                <hr className='w-5xl border-t border-[#e0e0e0]' />

                <div className="flex flex-row justify-between w-full max-w-5xl px-2 lg:px-0">
                    <div className="flex items-center font-adwaita font-bold text-xs text-[#e0e0e0]">
                        © 2026 CYBER DEFENSE ORGANIZATION
                    </div>

                    <div className="flex items-center font-adwaita font-bold text-xs text-[#e0e0e0] hover:white hover:underline">
                        <a href="mailto:eboard@uacyber.org">
                            eboard@uacyber.org
                        </a>
                    </div>

                    <div className='flex items-center gap-4 py-4'>
                        {footerItems.map((item, index) => (
                            <FooterItem key={index} link={item.link} svg={item.svg} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
