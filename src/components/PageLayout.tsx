import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='min-h-screen bg-black flex flex-col w-full'>
                <Header />

                <main className='flex-grow flex flex-col items-center w-full px-4 md:px-12 py-8'>

                    <div className='flex flex-col items-center w-full max-w-5xl gap-8'>
                        {children}
                    </div>

                </main>
                <Footer />
            </div>
        </>
    )
}
