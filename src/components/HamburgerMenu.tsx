import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

import { routes } from "../data/navigationData.tsx";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <>
            <button
                type='button'
                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={open}
                className='flex size-11 items-center justify-center text-[#e0e0e0] transition-colors hover:text-white'
                onClick={() => setOpen((current) => !current)}
            >
                <span className='sr-only'>{open ? 'Close navigation menu' : 'Open navigation menu'}</span>
                <span className='relative block h-5 w-7'>
                    <span className={`absolute left-0 top-0 block h-0.5 w-7 bg-current transition-all duration-200 ${open ? 'translate-y-[9px] rotate-45' : ''}`} />
                    <span className={`absolute left-0 top-[9px] block h-0.5 w-7 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`absolute bottom-0 left-0 block h-0.5 w-7 bg-current transition-all duration-200 ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
                </span>
            </button>

            <div
                className={`fixed inset-x-0 top-16 border-b border-[#e0e0e0] bg-black shadow-2xl transition-all duration-200 ${
                    open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                }`}
            >
                <div className='mx-auto flex w-full max-w-5xl flex-col px-4 py-3 sm:px-6'>
                    {routes.map((route, index) => {
                        const isActive = location.pathname === route.path;

                        return (
                            <Link
                                to={route.path}
                                key={index}
                                className={`border-b border-white/15 px-1 py-3 text-base font-bold uppercase tracking-wider text-[#e0e0e0] transition-colors last:border-b-0 hover:text-white ${
                                    isActive ? 'underline underline-offset-4' : ''
                                }`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setOpen(false);
                                }}
                            >
                                {route.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
