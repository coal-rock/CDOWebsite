import {Link} from "react-router";
import {useState} from "react";

import {routes} from "../data/navigationData.tsx";

import logo from "../assets/logo.png";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Menu Opening Button */}
            <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'
                 className='stroke-white mt-4 mr-8 cursor-pointer' onClick={() => setOpen(true)}>
                <path d='M7 10H64' strokeWidth='4'/>
                <path d='M7 24H64' strokeWidth='4'/>
                <path d='M7 38H64' strokeWidth='4'/>
            </svg>

            {/* Menu Sliding Backdrop */}
            <div
                className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)}
            />

            <div
                className={`p-4 fixed top-0 right-0 z-50 h-full w-full bg-base shadow-lg transform transition-transform duration-300 
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Logo as Home Button */}
                <div className='flex flex-row w-full items-center justify-between'>
                    <Link to='/'
                          className=''
                          onClick={(e) => {
                              if (location.pathname === '/') {
                                  e.preventDefault()
                                  window.scrollTo({top: 0, behavior: 'smooth'})
                              }
                              setOpen(false)
                          }}
                    >
                        <img
                            src={logo}
                            alt={``}
                            className='h-32'>
                        </img>
                    </Link>
                    {/* Menu Closing Button */}
                    <svg xmlns='http://www.w3.org/2000/svg' fill='white' width='48px' height='48px'
                         viewBox='0 0 16 16'
                         className='mr-8 cursor-pointer'
                         onClick={() => setOpen(false)}>
                        <path
                            d='M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z'
                            fillRule='evenodd'/>
                    </svg>
                </div>

                {/* Menu Options */}
                <div className='flex flex-col w-full items-center mt-12'>
                    <div className='flex flex-col gap-4'>
                        {routes.map((route, index) => (
                            <Link
                                to={route.path}
                                key={index}
                                className='text-gray-300 font-medium text-5xl p-2 hover:text-white transition-colors duration-200'
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: 'smooth'})
                                    setOpen(false)
                                }}
                            >
                                <p className={(location.pathname == route.path) ? "text-indigo-400" : ""}>
                                    <span className='text-yellow-400'>/</span>{route.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}