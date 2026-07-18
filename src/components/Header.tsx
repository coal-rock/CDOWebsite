import {Link, useLocation} from "react-router"
import HamburgerMenu from "./HamburgerMenu.tsx"
import logo from '../assets/logo.png'
import {routes} from "../data/navigationData.tsx";

export default function Header() {

    const location = useLocation()

    return (
        <>
            <header className='sticky top-0 z-50 bg-base w-full border-b-4 border-indigo-400'>

                <div className='mx-auto max-w-7xl px-4 h-16 flex items-center justify-between mb-4'>

                    <div className='flex items-center gap-4'>
                        {/* Logo as Home Button */}
                        <Link to='/'
                              onClick={() => {
                                  window.scrollTo({top: 0, behavior: 'smooth'})
                              }}
                        >
                            <img
                                src={logo}
                                alt='CDO Logo'
                                className='h-32 mt-14'
                            />
                        </Link>
                    </div>

                    <nav className='hidden md:flex items-center gap-8 mt-4'>
                        {routes.map((route, index) => {

                            const isActive = location.pathname === route.path

                            return (
                                <Link
                                    key={index}
                                    to={route.path}
                                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                    className={`text-lg font-medium tracking-wider uppercase transition-colors duration-200 hover:text-white
                                        ${isActive ? 'text-indigo-400' : 'text-gray-400'}`}
                                >
                                    {route.name == 'menu' ? 'home' : route.name}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className='md:hidden block'>
                        <HamburgerMenu/>
                    </div>

                </div>

            </header>
        </>
    )
}