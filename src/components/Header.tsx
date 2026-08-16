import { Link, useLocation } from "react-router"
import HamburgerMenu from "./HamburgerMenu.tsx"
import Logo from "../assets/logo-white-est-text.png";
import { routes } from "../data/navigationData.tsx";

export default function Header() {
    const location = useLocation()
    return (
        <>
            <header className='sticky top-0 z-50 bg-black w-5xl border-b border-[#e0e0e0]'>
                <div className='w-full px-10 h-18 flex items-center justify-center'>

                    <title>
                        {`${routes.find((val) => val.path == location.pathname)?.name} | CDO`}
                    </title>
                    <nav className='hidden md:flex items-between justify-between w-5xl'>
                        <img src={Logo} className="h-12" />

                        <div className="flex flex-row gap-8 justify-center items-center">
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
                    </nav>

                    <div className='md:hidden block'>
                        <HamburgerMenu />
                    </div>

                </div>

            </header>
        </>
    )
}
