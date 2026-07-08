import { Link } from "react-router";
import logo from '../assets/logo.png'

import { useState } from "react";
import { useLocation } from "react-router";

function Header() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const routes = [
        ["Home", "/"],
        ["Teams", "/teams"],
        ["GDDC", "/gddc"],
        ["Content", "/content"],
        ["Resources", "/resources"],
        ["About", "/about"],
        ["Alumni", "/alumni"]
    ];

    return (
        <>
            <header className="bg-gray-950 w-full h-auto border-0 border-b-indigo-400 border-solid border-b-3">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6">
                    <div className="relative flex h-12 md:h-16 items-center justify-between">
                        <div className="flex flex-row justify-center items-center">
                            <Link to="/" className="">
                                <img src={logo} className="h-30 mt-13"></img>
                            </Link>
                            <Link to="/" className="hidden lg:block text-xl text-white font-semibold font-mono hover:text-indigo-400 transition-colors duration-200">
                                {"Cyber Defense Organization"}
                            </Link>
                            <Link to="/" className="sm:hidden text-xl text-white font-semibold font-mono">
                                {"CDO"}
                            </Link>
                        </div>
                        <div className="flex-row hidden lg:flex">
                            {routes.map((route) => (
                                <Link className="flex flex-row text-xl text-gray-300 font-mono p-2 hover:text-white transition-colors duration-200" to={route[1]} >
                                    <p className="text-indigo-400">
                                        {"/ "}
                                    </p>
                                    <p className={(location.pathname == route[1]) ? "text-indigo-400" : ""}>
                                        {route[0]}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white lg:hidden" onClick={() => setOpen(true)}>
                            <path d="M7 10H41" stroke-width="2" />
                            <path d="M7 24H41" stroke-width="2" />
                            <path d="M7 38H41" stroke-width="2" />
                        </svg>

                        <div
                            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                }`}
                            onClick={() => setOpen(false)}
                        />

                        <div
                            className={`p-4 fixed top-0 right-0 z-50 h-full w-38 bg-gray-950 shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                                }`}

                        >
                            <div className="flex-row lg:flex">
                                {routes.map((route) => (
                                    <Link className="flex flex-row text-gray-300 font-mono p-2 hover:text-white transition-colors duration-200" to={route[1]} >
                                        <p className="text-indigo-400">
                                            {"/ "}
                                        </p>
                                        <p className={(location.pathname == route[1]) ? "text-indigo-400" : ""}>
                                            {route[0]}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;
