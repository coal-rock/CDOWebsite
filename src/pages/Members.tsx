import PageLayout from '../components/PageLayout.tsx'
import BoardCard from '../components/BoardCard'
import Section from "../components/Section.tsx";
import {eBoardMembers, cBoardMembers, alumniMembers} from "../data/membersData.tsx";

export default function Members() {
    const boardSections = [
        {title: "2026-2027 EBoard", data: eBoardMembers},
        {title: "2026-2027 CBoard", data: cBoardMembers},
        {title: "Alumni", data: alumniMembers}
    ];
    return (
        <PageLayout>
            <Section
                title='Members + Alumni'
                variant='header'
            >
                <p>
                    Meet this year's E-Board, plus the alumni
                    who held these roles before them.
                </p>
                <p className='text-stone-300'>
                    Many have gone on to roles in pen testing,
                    SOC analysis, and incident response. Others
                    took their skills into adjacent fields — security
                    engineering, cloud, GRC, and beyond.
                </p>
                {/* Loop through the sections */}
                {boardSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className='w-full'>
                        {/* Section Header */}
                        <div className='flex items-center w-full mt-12 mb-6'>
                            <h2 className='text-2xl md:text-4xl font-medium whitespace-nowrap mr-4'>{section.title}</h2>
                            <hr className='flex-grow border-1 border-indigo-400'/>
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
            </Section>
        </PageLayout>
    )
}
