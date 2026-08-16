import { Link, useLocation } from "react-router"
import HamburgerMenu from "./HamburgerMenu.tsx"
import Logo from "../assets/logo-white-est-text.png";
import { routes } from "../data/navigationData.tsx";

export default function Header() {
    const location = useLocation()
    return (
        <>
            <header className='sticky top-0 z-50 w-full border-b border-[#e0e0e0] bg-black/95 backdrop-blur-sm md:max-w-5xl'>
                <div className='mx-auto flex h-16 w-full max-w-5xl items-center px-4 sm:px-6 md:h-18 md:px-4'>

                    <title>
                        {`${routes.find((val) => val.path == location.pathname)?.name} | CDO`}
                    </title>

                    <nav className='flex w-full items-center justify-between'>
                        <Link
                            to='/'
                            aria-label='Cyber Defense Organization home'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src={Logo} alt='Cyber Defense Organization' className='h-10 w-auto md:h-12' />
                        </Link>

                        <div className='hidden flex-row items-center justify-center gap-8 md:flex'>
                            {routes.map((route, index) => {

                                const isActive = location.pathname === route.path

                                return (
                                    <Link
                                        key={index}
                                        to={route.path}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className={`text-base font-bold tracking-wider uppercase hover:text-white text-[#e0e0e0]
                                        ${isActive ? 'underline' : ''}`}
                                    >
                                        {route.name}
                                    </Link>
                                )
                            })}
                        </div>

                        <div className='block md:hidden'>
                            <HamburgerMenu />
                        </div>
                    </nav>

                </div>

            </header>
        </>
    )
}
