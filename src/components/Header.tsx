import {Link} from "react-router"
import logo from '../assets/logo.png'

import HamburgerMenu from "./HamburgerMenu.tsx";

function Header() {

    return (
        <>
            <header className='bg-gray-950 w-full h-auto border-0 border-b-indigo-400 border-solid border-b-3'>
                <div className='mx-auto max-w-9xl px-2 sm:px-4 lg:px-6'>
                    <div className='relative flex h-12 md:h-16 items-center justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <Link to='/' className=''>
                                <img
                                    src={logo}
                                    alt={``}
                                    className='h-30 mt-13'>
                                </img>
                            </Link>
                            <Link to='/'
                                  className='hidden lg:block text-xl text-white font-semibold font-mono hover:text-indigo-400 transition-colors duration-200'>
                                {"Cyber Defense Organization"}
                            </Link>
                            <Link to='/' className='sm:hidden text-xl text-white font-semibold font-mono'>
                                {"CDO"}
                            </Link>
                        </div>
                        <HamburgerMenu/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
