import Header from "../components/Header";

function Home() {
    return (
        <>
            <div className="flex-col w-full h-full">
                <Header />
                <div className="flex flex-col items-center justify-between w-full h-full bg-gray-950">
                    <div className="bg-white w-10 h-10">
                    </div>

                    <div className="bg-white w-10 h-10">
                    </div>

                    <div className="bg-white w-10 h-10">
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
