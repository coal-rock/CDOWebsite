import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function Competition() {

    // Grab all the .jpg files in the competition folder
    const images = import.meta.glob('../assets/competition/*.jpg', {eager: true, as: 'url'});
    // Convert that raw data object into an array of images
    const imagesUrls = Object.values(images);

    return (
        <>
            <Header/>
            <div className='flex flex-col w-full h-full items-start bg-gray-950 overflow-y-scroll'>
                <div className='flex flex-col items-start w-full gap-6 px-6 pt-8 md:px-12'>

                    {/* Header & Underline */}
                    <div className='flex flex-col items-start gap-4'>
                        <h1 className='text-4xl md:text-8xl font-medium text-white leading-tight'>
                            Compete in
                            GDDC
                        </h1>
                        {/* The short underline from the reference */}
                        <hr className='w-32 border-t-4 border-indigo-400'/>
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-4 text-left mt-2'>
                        <p className='text-lg md:text-5xl text-white'>
                            The Great Dane Defense Competition
                            (GDDC) is a defensive security
                            competition hosted by UAlbany CDO.
                        </p>
                        <p className='text-base md:text-4xl text-stone-300'>
                            Competitors operate a simulated
                            environment and defend against red-team
                            adversaries attempting to hinder their
                            operations and maintain persistence.
                            Competitors are also required to complete
                            tasks throughout the competition that reflect
                            real-world business operations.
                        </p>
                    </div>

                    {/* Button */}
                    <div className='flex flex-col w-full gap-4 mt-4'>
                        <button
                            className='text-3xl flex justify-center items-center gap-2 bg-[#6E4BFF] text-white font-medium py-4 px-6 w-full rounded hover:bg-indigo-500 transition-colors tracking-wide'>
                            REGISTER FOR FALL 2026 <span className='text-5xl -translate-y-1'>&rarr;</span>
                        </button>
                    </div>

                    {/* Images */}
                    <div className='flex flex-col gap-6 mt-12 mb-20'>
                        {imagesUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`GDDC Competition Photo ${index + 1}`}
                                className='w-full h-auto rounded-xl border-2 border-indigo-900/50'
                            />
                        ))}
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Competition;