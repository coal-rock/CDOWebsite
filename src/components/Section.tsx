import React from 'react';

interface SectionProps {
    title: React.ReactNode;
    children?: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="w-full flex flex-col">

            <div className="mb-3 flex w-full items-center gap-2 sm:mb-2">
                <h2 className='whitespace-nowrap font-adwaita text-lg font-bold sm:text-xl'>
                    {title}
                </h2>

                <div className="w-full border-b-1 border-[#e0e0e0]" />
            </div>

            {children && (
                <div className="max-w-5xl text-base leading-relaxed sm:text-lg">
                    {children}
                </div>
            )}

        </section>
    );
}
