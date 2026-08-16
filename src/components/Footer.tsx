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

                <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-2 py-4 sm:flex-row sm:gap-4 sm:py-0">
                    <div className="flex items-center text-center font-adwaita text-xs font-bold text-[#e0e0e0]">
                        © 2026 CYBER DEFENSE ORGANIZATION
                    </div>

                    <div className="flex items-center font-adwaita text-xs font-bold text-[#e0e0e0] hover:underline pb-1 sm:pb-0">
                        <a href="mailto:eboard@uacyber.org">
                            eboard@uacyber.org
                        </a>
                    </div>

                    <div className='flex items-center gap-4 sm:py-4'>
                        {footerItems.map((item, index) => (
                            <FooterItem key={index} link={item.link} svg={item.svg} />
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}
