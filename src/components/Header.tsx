import { Link } from "react-router";
import logo from '../assets/logo.png'

function Header() {
    return (
        <>
            <nav className="bg-gray-950">
                <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-row justify-center items-center">
                            <img src={logo} className="h-12 pr-2">
                            </img>
                            <Link to="/" className="text-2xl text-white hover:underline">
                                {"Cyber Defense Organization"}
                            </Link>
                        </div>
                        <div className="flex">
                            {[
                                ["/Teams", "/teams"],
                                ["/GDDC", "/gddc"],
                                ["/Content", "/content"],
                                ["/Resources", "/resources"],
                                ["/About", "/about"],
                                ["/Alumni", "/alumni"],
                            ].map((route) => (
                                <Link className="text-xl text-white p-2 hover:underline" to={route[1]}>
                                    {route[0]}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header;
