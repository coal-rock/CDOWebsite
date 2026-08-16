import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function PageLayout({ title, description, image, children }: { title: React.ReactNode, description: React.ReactNode, image: string, children: React.ReactNode }) {
    return (
        <>
            <div className='min-h-screen bg-black flex flex-col w-full items-center'>
                <Header />

                <div className="relative w-full max-w-5xl overflow-hidden border-b border-b-[#e0e0e0] after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-[url('https://db.cs.cmu.edu/wordpress/wp-content/themes/cmudb/assets/images/banner-overlay.png')] after:shadow-[inset_0_0_128px_0_rgb(0_0_0)] h-72 md:h-[29rem]">
                    <img src={image} alt="" className="block h-full md:h-full w-full object-cover blur-[1px]" />

                    <div className="absolute inset-0 z-10 flex shrink">
                        <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-7 sm:px-8 sm:py-0 md:px-9 justify-center sm:pt-0 pt-4 shrink">
                            <div className="w-full max-w-xl font-adwaita text-2xl font-bold leading-tight text-[#e0e0e0] text-shadow-md text-shadow-black sm:text-3xl md:w-1/2">
                                {title}
                            </div>
                            <div className="mt-2 w-full max-w-xl font-sans font-semibold text-base leading-relaxed text-[#e0e0e0] text-shadow-lg text-shadow-black sm:text-lg md:w-1/2 md:text-xl">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>

                <main className='flex w-full flex-grow flex-col items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-0'>
                    <div className='flex flex-col items-center w-full max-w-5xl gap-8'>
                        {children}
                    </div>

                </main>
                <Footer />
            </div>
        </>
    )
}
