import PageLayout from '../components/PageLayout.tsx'
import BoardCard from '../components/BoardCard'

import {eBoardMembers, cBoardMembers, alumniMembers} from "../data/membersData.tsx";

export default function Members() {

    const boardSections = [
        {title: "2026-2027 EBoard", data: eBoardMembers},
        {title: "2026-2027 CBoard", data: cBoardMembers},
        {title: "Alumni", data: alumniMembers}
    ];

    return (
        <PageLayout>
            {/* Page Title & Underline */}
            <div className='flex flex-col items-start w-full'>
                <h1 className='text-4xl md:text-5xl font-medium leading-tight'>
                    Members + Alumni
                </h1>
                <hr className='w-16 border-indigo-400 mt-4'/>
            </div>

            {/* Text Content */}
            <div className='flex flex-col gap-4 text-left'>
                <p className='text-xl text-white'>
                    Meet this year's E-Board, plus the alumni
                    who held these roles before them.
                </p>
                <p className='text-lg text-stone-300'>
                    Many have gone on to roles in pen testing,
                    SOC analysis, and incident response. Others
                    took their skills into adjacent fields — security
                    engineering, cloud, GRC, and beyond.
                </p>
            </div>


            {/* Loop through the sections */}
            {boardSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className='w-full'>
                    {/* Section Header */}
                    <div className='flex items-center w-full mt-12 mb-6'>
                        <h2 className='text-2xl font-medium whitespace-nowrap mr-4'>{section.title}</h2>
                        <hr className='flex-grow border-indigo-400 opacity-50'/>
                    </div>

                    {/* Loop through the specific members for this section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                        {section.data.map((member, memberIndex) => (
                            <BoardCard
                                key={memberIndex}
                                name={member.name}
                                position={member.position}
                                headshot={member.headshot}
                            />
                        ))}
                    </div>

                </div>
            ))}

        </PageLayout>
    )
}
