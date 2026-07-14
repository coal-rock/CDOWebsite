import {useState} from "react";
import {Link} from "react-router";

import logo from "../assets/logo.png";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const routes = [
        ["menu", "/"],
        ["members", "/members"],
        ["resources", "/resources"],
        ["competition", "/competition"],
    ];

    return (
        <>
            <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'
                 className='stroke-white lg:hidden' onClick={() => setOpen(true)}>
                <path d='M7 10H41' stroke-width='2'/>
                <path d='M7 24H41' stroke-width='2'/>
                <path d='M7 38H41' stroke-width='2'/>
            </svg>

            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)}
            />

            <div
                className={`p-4 fixed top-0 right-0 z-50 h-full w-full bg-gray-950 shadow-lg transform transition-transform duration-300 
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className='flex flex-row w-full items-center justify-between'>
                    <Link to='/' className='' onClick={() => {
                        setOpen(false)
                    }}>
                        <img
                            src={logo}
                            alt={``}
                            className='h-60'>
                        </img>
                    </Link>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' width='60px' height='60px'
                         viewBox='0 0 16 16'
                         onClick={() => setOpen(false)}>
                        <path
                            d='M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z'
                            fill-rule='evenodd'/>
                    </svg>
                </div>

                <div className='flex flex-col w-full items-center mt-12'>
                    <div className='flex flex-col gap-16'>
                        {routes.map((route) => (
                            <Link
                                className='text-gray-300 font-medium text-8xl p-2 hover:text-white transition-colors duration-200'
                                to={route[1]}>
                                <p className={(location.pathname == route[1]) ? "text-indigo-400" : ""}>
                                    <span className='text-yellow-400'>/</span> {route[0]}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}