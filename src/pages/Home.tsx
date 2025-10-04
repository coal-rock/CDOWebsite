import Card from "../components/Card";
import Header from "../components/Header";

import hero from "../assets/hero.png";
import workshop from "../assets/workshop.png"
import community from "../assets/community.png"
import competition from "../assets/competition.png"


function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full h-full items-center bg-gray-950 overflow-y-scroll">
                <div className="flex flex-col items-center w-full lg:w-4xl h-full pt-6 gap-8 md:px-4">
                    <div className="flex flex-col gap-6 items-center">

                        <div className="text-white text-2xl md:text-4xl font-bold">
                            {"Cyber Defense Organization"}
                        </div>
                        <img className="md:rounded hover:shadow-xl shadow-indigo-950 hover:scale-101 transform duration-300 px-8 md:px-0" src={hero} />
                    </div>

                    <div className="flex flex-col text-white w-full items-center gap-4 p-4 md:p-0 text-center md:text-left">
                        <div className="text-2xl md:text-4xl text-white font-semibol">
                            {"Our Mission"}
                        </div>

                        <div className="text-lg md:text-2xl text-stone-100">
                            {"Cyber Defense Organization is a student run organization dedicated towards teaching students practical skills in preparation for cyber security competitions and the real world. Through workshops, competitions, and teamwork, it is our mission to prepare students for careers in this rapidly evolving field. Whether you are completely new to cybersecurity or a seasoned professional we would love for you to join us in our club."}
                        </div>
                    </div>

                    <div className="flex flex-col px-4 pb-4 md:flex-row md:px-0 justify-between gap-4">
                        <Card title="Interactive Workshops" image={workshop} body="Our organization holds weekly workshops during the semester to teach members new things in the security industry." />
                        <Card title="Community" image={community} body="We've built a thriving discord community that allows members to discuss current security events, share resources, and network." />
                        <Card title="Competition" image={competition} body="We attend multiple competitions throughout the year focusing on red/blue/purple teaming & we even host our own competition, GDDC!" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
