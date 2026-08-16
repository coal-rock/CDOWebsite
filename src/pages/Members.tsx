import PageLayout from '../components/PageLayout.tsx'
import BoardCard from '../components/BoardCard'
import MembersImage from '../assets/members.jpg';


import { eBoardMembers, cBoardMembers, alumniMembers } from "../data/membersData.tsx";

export default function Members() {
    const boardSections = [
        { title: "2026-2027 EBoard", data: eBoardMembers },
        { title: "2026-2027 CBoard", data: cBoardMembers },
        { title: "Alumni", data: alumniMembers }
    ];
    return (
        <PageLayout
            title="MEMBERS"
            description="Meet this year's E-Board, plus the alumni who held these roles before them."
            image={MembersImage}
        >
            {/* Loop through the sections */}
            {boardSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className='w-full'>
                    {/* Section Header */}
                    <div className='mb-5 flex w-full items-center sm:mb-6'>
                        <h2 className='mr-3 whitespace-nowrap font-adwaita text-xl font-bold sm:mr-4 sm:text-2xl'>{section.title}</h2>
                        <div className='flex-grow border-b border-[#e0e0e0]' />
                    </div>

                    {/* Loop through the specific members for this section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
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
