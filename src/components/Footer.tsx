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
            <footer className='mt-auto flex w-full flex-col items-center px-4 sm:px-6 lg:px-0'>
                <hr className='w-full max-w-5xl border-t border-[#e0e0e0]' />

                <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-2 py-4 sm:flex-row sm:gap-4 sm:py-0 px-1">
                    <div className="text-left font-adwaita text-xs font-semibold text-[#e0e0e0]/80 hover:underline pb-1 sm:pb-0 md:text-base flex-1">
                        <a href="mailto:eboard@uacyber.org">
                            eboard@uacyber.org
                        </a>
                    </div>

                    <div className="text-center font-adwaita text-xs font-semibold text-[#e0e0e0] md:text-base flex-1">
                        © 2026 CYBER DEFENSE ORGANIZATION
                    </div>

                    <div className='flex text-right items-end justify-end gap-4 sm:py-4 flex-1'>
                        {footerItems.map((item, index) => (
                            <FooterItem key={index} link={item.link} svg={item.svg} />
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}
