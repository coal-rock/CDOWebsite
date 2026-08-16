import React from 'react';

interface SectionProps {
    title: React.ReactNode;
    children?: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="w-full flex flex-col">

            <div className="flex items-center gap-2 w-full mb-2">
                <h2 className='font-adwaita font-bold text-xl whitespace-nowrap'>
                    {title}
                </h2>

                <div className="w-full border-b-1 border-[#e0e0e0]" />
            </div>

            {children && (
                <div className="text-lg">
                    {children}
                </div>
            )}

        </section>
    );
}
