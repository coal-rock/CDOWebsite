import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className='min-h-screen bg-base flex flex-col w-full'>
                <Header/>
                <main className='flex-grow flex flex-col items-start w-full px-4 md:px-12 py-8'>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}