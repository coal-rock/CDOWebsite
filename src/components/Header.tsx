import {Link} from "react-router"
import HamburgerMenu from "./HamburgerMenu.tsx"
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <>
            <header className='sticky top-0 z-50 bg-gray-950 w-full border-b-4 border-indigo-400'>
                <div className='mx-auto max-w-7xl px-6 h-16 flex items-center justify-between mb-32'>
                    <div className='flex items-center gap-4'>
                        <Link to='/'
                              onClick={() => {
                                  window.scrollTo({top: 0, behavior: 'smooth'})
                              }}
                        >
                            <img
                                src={logo}
                                alt='CDO Logo'
                                className='h-60 mt-48'
                            />
                        </Link>
                    </div>
                    <HamburgerMenu/>
                </div>
            </header>
        </>
    )
}