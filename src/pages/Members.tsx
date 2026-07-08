import Header from "../components/Header";
import BoardCard from "../components/BoardCard";
import Footer from "../components/Footer.tsx";

const loadBoard = () => {
    const images = import.meta.glob("../assets/board/*", {
        eager: true,
    });

    return Object.fromEntries(
        Object.entries(images).map(([path, module]) => {
            const fileName = path.split('/').pop()!.replace(".png", "").replace(".jpg", "");
            return [fileName, (module as { default: string }).default];
        })
    );
};

const board = loadBoard();
console.log(board);

export default function Members() {
    return (
        <>
            <Header/>
            <div className='flex flex-col w-full h-full items-start bg-gray-950 overflow-y-scroll'>
                <div className='flex flex-col items-start w-full gap-6 px-6 pt-8 md:px-12'>
                    <div className='flex flex-col items-center gap-2 mt-24 mb-24'>
                        <div className='text-4xl md:text-8xl font-medium text-white leading-tight'>
                            {"Members + Alumni"}
                            <hr className='w-32 border-2 border-indigo-400 mt-8 mb-8'/>
                        </div>
                        {/* Text Content */}
                        <div className='flex flex-col gap-4 text-left mt-2'>
                            <p className='text-lg md:text-5xl text-white'>
                                Meet this year's E-Board, plus the alumni
                                who held these roles before them.
                            </p>
                            <p className='text-base md:text-4xl text-stone-300'>
                                Many have gone on to roles in pen testing,
                                SOC analysis, and incident response. Others
                                took their skills into adjacent fields — security
                                engineering, cloud, GRC, and beyond
                            </p>
                        </div>

                    </div>

                    <div className='flex items-center gap-4 w-full mb-8'>
                        <h2 className='text-6xl font-medium text-white whitespace-nowrap'>2026-2027 EBoard</h2>
                        <hr className='flex-grow border-2 border-indigo-400'/>
                    </div>

                    <div className='flex flex-col flex-wrap gap-4 justify-center pb-4'>
                        <BoardCard name='Zoe Winden' position='President' headshot={board.zoe}/>
                        <BoardCard name='Cole Brazinski' position='Vice President' headshot={board.coal}/>
                        <BoardCard name='Samuel Nava' position='Chief Technician' headshot={board.samn}/>
                        <BoardCard name='Mesyah Thomas-Harvey' position='Treasurer' headshot={board.mesyah}/>
                        <BoardCard name='Xavier Daniel' position='Secretary' headshot={board.xavier}/>
                        <BoardCard name='Jacob McNamara' position='Marketing' headshot={board.nophoto}/>
                    </div>

                    <div className='flex items-center gap-4 w-full'>
                        <h2 className='text-6xl font-medium text-white whitespace-nowrap'>2026-2027 CBoard</h2>
                        <hr className='flex-grow border-t-4 border-indigo-400 opacity-50'/>
                    </div>

                    <div className='flex flex-col flex-wrap gap-4 justify-center pb-4'>
                        <BoardCard name='Panos Katsanis' position='Blue Team Captain' headshot={board.panos}/>
                        <BoardCard name='Elijah Williams' position='Blue Team Co-Captain' headshot={board.elijah}/>
                        <BoardCard name='Michael Conaway' position='Red Team Captain' headshot={board.michael}/>
                        <BoardCard name='Isaac Visconti' position='Red Team Co-Captain' headshot={board.nophoto}/>
                    </div>

                    <div className='flex items-center gap-4 w-full'>
                        <h2 className='text-6xl font-medium text-white whitespace-nowrap'>Alumni</h2>
                        <hr className='flex-grow border-t-4 border-indigo-400 opacity-50'/>
                    </div>

                    <div className='flex flex-col flex-wrap gap-4 justify-center pb-4'>
                        <BoardCard name='Dylan Tarace' position='Consultant Engineer' headshot={board.dylan}/>
                        <BoardCard name='Nicholas Coppola' position='Data Center Networks Assistant'
                                   headshot={board.nick}/>
                        <BoardCard name='Matthew Waskiewicz' position='Enterprise Network Services Assistant'
                                   headshot={board.matt}/>
                        <BoardCard name='Roberto Friedlander' position='IT Security Analyst' headshot={board.berto}/>
                        <BoardCard name='Jonathan Edwards' position='Information Security Intern' headshot={board.jon}/>
                        <BoardCard name='Tyler Barnes' position='Cyber Security Intern' headshot={board.tyler}/>
                        <BoardCard name='Sean Bartoszewicz' position='Hardware Services Technician'
                                   headshot={board.sean}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
