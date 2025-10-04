import { Link } from "react-router";
import logo from '../assets/logo.png'

function Header() {
    return (
        <>
            <header className="bg-gray-950 w-full h-auto border-b-indigo-600 border-solid border-1">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-row justify-center items-center">
                            <img src={logo} className="h-12 pr-2 pb-1.5">
                            </img>
                            <Link to="/" className="text-2xl text-white font-semibold font-mono hover:text-indigo-400 transition-colors duration-200">
                                {"Cyber Defense Organization"}
                            </Link>
                        </div>
                        <div className="flex flex-row">
                            {[
                                ["Home", "/"],
                                ["Teams", "/teams"],
                                ["GDDC", "/gddc"],
                                ["Content", "/content"],
                                ["Resources", "/resources"],
                                ["About", "/about"],
                                ["Alumni", "/alumni"],
                            ].map((route) => (
                                <Link className="flex flex-row text-xl text-gray-300 font-mono p-2 hover:text-white transition-colors duration-200" to={route[1]}>
                                    <p className="text-indigo-600">
                                        {"/ "}
                                    </p>
                                    <p>
                                        {route[0]}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;
