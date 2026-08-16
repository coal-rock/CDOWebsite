import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function PageLayout({ title, description, image, children }: { title: React.ReactNode, description: React.ReactNode, image: string, children: React.ReactNode }) {
    return (
        <>
            <div className='min-h-screen bg-black flex flex-col w-full items-center'>
                <Header />

                <div className="relative overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-[url('https://db.cs.cmu.edu/wordpress/wp-content/themes/cmudb/assets/images/banner-overlay.png')] after:shadow-[inset_0_0_128px_0_rgb(0_0_0)] border-b border-b-[#e0e0e0] max-h-[29rem] w-5xl">
                    <img src={image} alt="" className="block h-full w-full object-cover blur-[1px]" />

                    <div className="absolute inset-0 z-10 flex items-center">
                        <div className="flex flex-col mx-auto w-full max-w-5xl px-4">
                            <div className="w-1/2 rounded-lg px-5 text-3xl text-[#e0e0e0] text-shadow-black text-shadow-md font-adwaita font-bold leading">
                                {title}
                            </div>
                            <div className="w-1/2 rounded-lg px-5 py-3 text-xl text-[#e0e0e0] text-shadow-black text-shadow-lg font-sans">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>

                <main className='flex-grow flex flex-col items-center w-full px-0 py-8'>
                    <div className='flex flex-col items-center w-full max-w-5xl gap-8'>
                        {children}
                    </div>

                </main>
                <Footer />
            </div>
        </>
    )
}
