import Header from "../components/Header";
import BoardCard from "../components/BoardCard";

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

export default function About() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full h-full items-center bg-gray-950 overflow-y-scroll">
                <div className="flex flex-col items-center w-full lg:w-4xl h-full pt-6 gap-8 lg:gap-12 md:px-4">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-white text-2xl md:text-4xl font-bold">
                            {"About Us"}
                        </div>

                        <div className="text-lg md:text-2xl text-stone-100 text-center px-4 lg:px-4">
                            {"Cyber Defense Organization is a student run organization dedicated towards teaching students practical skills in preparation for cyber security competitions and the real world. Through workshops, competitions, and teamwork, it is our mission to prepare students for careers in this rapidly evolving field. Whether you are completely new to cybersecurity or a seasoned professional we would love for you to join us in our club."}
                        </div>
                    </div>

                    <div className="text-white text-2xl md:text-4xl font-bold">
                        {"2025-2026 E-Board"}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center pb-4">
                        <BoardCard name="Dylan Tarace" position="President" headshot={board.dylan} />
                        <BoardCard name="Nick Coppola" position="Vice President" headshot={board.nick} />
                        <BoardCard name="Tyler Barnes" position="Chief Technician" headshot={board.tyler} />
                        <BoardCard name="Zoe Winden" position="Treasurer" headshot={board.zoe} />
                        <BoardCard name="Lily Zheng" position="Secretary" headshot={board.lily} />
                        <BoardCard name="Sean Bartoszewicz" position="Marketing" headshot={board.sean} />
                    </div>

                    <div className="text-white text-2xl md:text-4xl font-bold">
                        {"2025-2026 Committee Board"}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center pb-4">
                        <BoardCard name="Roberto Friedlander" position="Blue Team Captain" headshot={board.berto} />
                        <BoardCard name="Zion Smith-Fox" position="Blue Team Co-Captain" headshot={board.zion} />
                        <BoardCard name="Jonathan Edwards" position="Red Team Captain" headshot={board.jon} />
                        <BoardCard name="Matthew Waskiewicz" position="Red Team Co-Captain" headshot={board.matt} />
                    </div>
                </div>
            </div >
        </>
    );
}
