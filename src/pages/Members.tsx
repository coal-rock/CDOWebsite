import PageLayout from '../components/PageLayout.tsx'
import BoardCard from '../components/BoardCard'

import {eBoardMembers, cBoardMembers, alumniMembers} from "../data/membersData.tsx";

export default function Members() {
    return (
        <PageLayout>
            <div className='flex-grow flex flex-col items-start w-full pt-12 gap-4'>
                <div className='text-5xl font-medium leading-tight'>
                    {'Members + Alumni'}
                    <hr className='w-16 border-indigo-400 mt-4'/>
                </div>
                {/* Text Content */}
                <div className='flex flex-col  text-left'>
                    <p className='text-lg'>
                        Meet this year's E-Board, plus the alumni
                        who held these roles before them.
                    </p>
                    <p className='text-stone-300'>
                        Many have gone on to roles in pen testing,
                        SOC analysis, and incident response. Others
                        took their skills into adjacent fields — security
                        engineering, cloud, GRC, and beyond
                    </p>
                </div>
            </div>

            {/* EBoard */}
            <div className='flex items-center w-full'>
                <h2 className='text-xl font-medium whitespace-nowrap'>2026-2027 EBoard</h2>
                <hr className='flex-grow border-indigo-400'/>
            </div>
            <div className='flex flex-col flex-wrap justify-center'>
                {eBoardMembers.map((member, index) => (
                    <BoardCard key={index}
                               name={member.name}
                               position={member.position}
                               headshot={member.headshot}
                    />
                ))}
            </div>

            {/* CBoard */}
            <div className='flex items-center w-full'>
                <h2 className='text-xl font-medium whitespace-nowrap'>2026-2027 CBoard</h2>
                <hr className='flex-grow border-indigo-400'/>
            </div>
            <div className='flex flex-col flex-wrap justify-center'>
                {cBoardMembers.map((member, index) => (
                    <BoardCard key={index}
                               name={member.name}
                               position={member.position}
                               headshot={member.headshot}
                    />
                ))}
            </div>

            {/* Alumni */}
            <div className='flex items-center  w-full'>
                <h2 className='text-xl font-medium whitespace-nowrap'>Alumni</h2>
                <hr className='flex-grow border-indigo-400'/>
            </div>
            <div className='flex flex-col flex-wrap  justify-center'>
                {alumniMembers.map((member, index) => (
                    <BoardCard key={index}
                               name={member.name}
                               position={member.position}
                               headshot={member.headshot}
                    />
                ))}
            </div>
        </PageLayout>
    )
}
