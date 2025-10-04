import Card from "../components/Card";
import Header from "../components/Header";

import hero from "../assets/hero.png";

function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full h-full items-center bg-gray-950">
                <div className="flex flex-col items-center justify-between w-5xl h-full pt-10">
                    <div className="flex flex-col gap-6 items-center">

                        <div className="text-white text-6xl font-bold">
                            {"Cyber Defense Organization"}
                        </div>
                        <img className="rounded hover:shadow-xl shadow-indigo-950 hover:scale-101 transform duration-300" src={hero} />

                    </div>

                    <div className="flex flex-col text-white w-full items-center gap-4">
                        <div className="text-5xl text-white font-semibol">
                            {"Our Mission"}
                        </div>

                        <div className="text-2xl text-stone-100">
                            {"Cyber Defense Organization is a student run organization dedicated towards teaching students practical skills in preparation for cyber security competitions and the real world. Through workshops, competitions, and teamwork, it is our mission to prepare students for careers in this rapidly evolving field. Whether you are completely new to cybersecurity or a seasoned professional we would love for you to join us in our club."}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-4">
                        <Card title="Interactive Workshops" body="Our organization holds weekly workshops during the semester to teach members new things in the security industry." />
                        <Card title="Community" body="We've built a thriving discord community that allows members to discuss current security events, share resources, and network." />
                        <Card title="Competition" body="We attend multiple competitions throughout the year focusing on red/blue/purple teaming & we even host our own competition, GDDC!" />
                    </div>

                    <div className="bg-white w-10 h-10">
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
