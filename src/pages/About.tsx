import Header from "../components/Header";
import BoardCard from "../components/BoardCard";

import dylan from "../assets/board/dylan.jpg";
import nick from "../assets/board/nick.jpg";
import zoe from "../assets/board/zoe.jpg";
import lily from "../assets/board/lily.jpg";
import sean from "../assets/board/sean.jpg";
import tyler from "../assets/board/tyler.png";


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
                        <BoardCard name="Dylan Tarace" position="President" headshot={dylan} />
                        <BoardCard name="Nick Coppola" position="Vice President" headshot={nick} />
                        <BoardCard name="Zoe Winden" position="Treasurer" headshot={zoe} />
                        <BoardCard name="Lily Zheng" position="Secretary" headshot={lily} />
                        <BoardCard name="Sean Bartoszewicz" position="Marketing" headshot={sean} />
                        <BoardCard name="Tyler Barnes" position="CTO" headshot={tyler} />
                    </div>
                </div>
            </div >
        </>
    );
}
