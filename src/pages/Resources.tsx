import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function Competition() {

    return (
        <>
            <Header/>
            <div className='flex flex-col w-full h-full items-start bg-gray-950 overflow-y-scroll'>
                <div className='flex flex-col items-start w-full gap-6 px-6 pt-8 md:px-12'>

                    {/* Header & Underline */}
                    <div className='flex flex-col items-start gap-4'>
                        <h1 className='text-4xl md:text-8xl font-medium text-white leading-tight'>
                            Helpful
                            Resources
                        </h1>
                        {/* The short underline from the reference */}
                        <hr className='w-32 border-t-4 border-indigo-400'/>
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-4 text-left mt-2'>
                        <p className='text-lg md:text-5xl text-white'>
                            Whether you're looking to study for a
                            certification or brush up on some
                            knowledge, our collection of useful
                            information will be very useful to you!
                        </p>
                        <p className='text-base md:text-4xl text-stone-300'>
                            Disclaimer: All links here are posted for
                            educational purposes. neither CDO, anyone
                            on E-Board, nor UAlbany is responsible for the
                            misuse of these links/resources
                            contained in the links. In other words, please
                            use them responsibly.
                        </p>
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Competition;