import PageLayout from '../components/PageLayout.tsx'
import { BoardCard, AlumniCard, type AlumniCardProps, type BoardCardProps } from '../components/BoardCard'
import MembersImage from '../assets/members.jpg';


import { eBoardMembers, cBoardMembers, alumniMembers } from "../data/membersData.tsx";

interface MembersSectionProps {
    sectionTitle: string,
    data: Array<BoardCardProps | AlumniCardProps>,
    type: "board" | "alumni",
}

function MembersSection({ sectionTitle, data, type }: MembersSectionProps) {
    if (type == "board") {
        data = data as Array<BoardCardProps>
    }
    else {
        data = data as Array<AlumniCardProps>
    }

    return (
        <div className='w-full'>
            <div className='mb-5 flex w-full items-center sm:mb-6'>
                <h2 className='mr-3 whitespace-nowrap font-adwaita text-xl font-bold sm:mr-4 sm:text-2xl'>{sectionTitle}</h2>
                <div className='flex-grow border-b border-[#e0e0e0]' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                {
                    data.map((member, memberIndex) => (
                        type == "board" &&
                        <BoardCard
                            key={memberIndex}
                            name={member.name}
                            boardPosition={(member as BoardCardProps).boardPosition}
                            headshot={member.headshot}
                            bio={(member as BoardCardProps).bio}
                        /> ||
                        type == "alumni" &&
                        <AlumniCard
                            name={member.name}
                            headshot={member.headshot}
                            jobTitle={(member as AlumniCardProps).jobTitle}
                            company={(member as AlumniCardProps).company}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default function Members() {
    return (
        <PageLayout
            title="MEMBERS"
            description="Meet this year's board, plus the alumni who held these roles before them."
            image={MembersImage}
        >
            <MembersSection sectionTitle='2026-2027 Executive Board' data={eBoardMembers} type="board" />
            <MembersSection sectionTitle='2026-2027 Committee Board' data={cBoardMembers} type="board" />
            <MembersSection sectionTitle='Alumni' data={alumniMembers} type="alumni" />
        </PageLayout>
    )
}
