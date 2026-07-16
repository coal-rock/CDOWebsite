import Header from "../components/Header";
import Footer from "../components/Footer.tsx";
import BoardCard from "../components/BoardCard";

export default function Members() {

    const loadBoard = () => {
        const images = import.meta.glob("../assets/board/*", {
            eager: true,
            query: '?url',
            import: 'default'
        });

        return Object.fromEntries(
            Object.entries(images).map(([path, module]) => {
                const fileName = path.split('/').pop()!.replace(".png", "").replace(".jpg", "");
                return [fileName, module as string];
            })
        );
    };

    const board = loadBoard();

    const eBoardMembers = [
        {name: 'Zoe Winden', position: 'President', headshot: board.zoe},
        {name: 'Cole Brazinski', position: 'Vice President', headshot: board.coal},
        {name: 'Samuel Nava', position: 'Chief Technician', headshot: board.samn},
        {name: 'Mesyah Thomas-Harvey', position: 'Treasurer', headshot: board.mesyah},
        {name: 'Xavier Daniel', position: 'Secretary', headshot: board.xavier},
        {name: 'Jacob McNamara', position: 'Marketing', headshot: board.nophoto}
    ]

    const cBoardMembers = [
        {name: 'Panos Katsanis', position: 'Blue Team Captain', headshot: board.panos},
        {name: 'Elijah Williams', position: 'Blue Team Co-Captain', headshot: board.elijah},
        {name: 'Michael Conaway', position: 'Red Team Captain', headshot: board.michael},
        {name: 'Isaac Visconti', position: 'Red Team Co-Captain', headshot: board.nophoto}
    ]

    const alumniMembers = [
        {name: 'Dylan Tarace', position: 'Consultant Engineer', headshot: board.dylan},
        {name: 'Nicholas Coppola', position: 'Data Center Networks Assistant', headshot: board.nick},
        {name: 'Matthew Waskiewicz', position: 'Enterprise Network Services Assistant', headshot: board.matt},
        {name: 'Roberto Friedlander', position: 'IT Security Analyst', headshot: board.berto},
        {name: 'Jonathan Edwards', position: 'Information Security Intern', headshot: board.jon},
        {name: 'Tyler Barnes', position: 'Cybersecurity Intern', headshot: board.tyler},
        {name: 'Sean Bartoszewicz', position: 'Hardware Services Technician', headshot: board.sean}
    ]

    return (
        <>
            <Header/>
            <div className='flex flex-col w-full items-start bg-gray-950 px-4 gap-4'>
                <div className='flex-grow flex flex-col items-start w-full pt-12 gap-4'>
                    <div className='text-5xl font-medium text-white leading-tight'>
                        {"Members + Alumni"}
                        <hr className='w-16 border-indigo-400 mt-4'/>
                    </div>
                    {/* Text Content */}
                    <div className='flex flex-col  text-left'>
                        <p className='text-lg text-white'>
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
                    <h2 className='text-xl font-medium text-white whitespace-nowrap'>2026-2027 EBoard</h2>
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
                    <h2 className='text-xl font-medium text-white whitespace-nowrap'>2026-2027 CBoard</h2>
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
                    <h2 className='text-xl font-medium text-white whitespace-nowrap'>Alumni</h2>
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
                <Footer/>
            </div>
        </>
    );
}
