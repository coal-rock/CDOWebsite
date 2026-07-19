import React from 'react';

interface SectionProps {
    title: React.ReactNode;
    variant?: 'header' | 'regular'; // 'header' styles the main H1, 'regular' styles H2 sections
    children?: React.ReactNode;
}

export default function Section({title, variant = 'regular', children}: SectionProps) {
    const isHeaderLevel = variant === 'header';

    return (
        <section className={`w-full flex flex-col ${isHeaderLevel ? 'mb-8' : 'mt-12 mb-8'}`}>

            {/* --- HEADER AREA --- */}
            <div className={isHeaderLevel
                ? "flex flex-col items-start w-full"
                : "flex items-center gap-4 w-full mb-6"
            }>
                {isHeaderLevel ? (
                    <h1 className='text-4xl md:text-6xl font-medium leading-tight'>
                        {title}
                    </h1>
                ) : (
                    <h2 className='text-2xl md:text-4xl font-medium whitespace-nowrap'>
                        {title}
                    </h2>
                )}

                <hr className={isHeaderLevel
                    ? "w-16 border-1 border-indigo-400 mt-4"
                    : "flex-grow border-1 border-indigo-400"
                }/>
            </div>

            {/* --- CONTENT AREA --- */}
            {children && (
                <div className={`text-xl md:text-2xl 
                ${isHeaderLevel ? 'flex flex-col gap-4 text-left mt-6' : 'w-full'}`
                }>
                    {children}
                </div>
            )}

        </section>
    );
}