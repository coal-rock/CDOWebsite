import Header from "../components/Header"

import croppedCompetition from "../assets/cropped-competition.png"

import gddc_1 from "../assets/GDDC/gddc_1.png"
import gddc_2 from "../assets/GDDC/gddc_2.png"
import gddc_3 from "../assets/GDDC/gddc_3.png"
import gddc_4 from "../assets/GDDC/gddc_4.png"

interface Data {
    header: string,
    text: string,
    photo_right: boolean,
    photo: any
}

const data: Data[] = [
    {
        header: "What is it?",
        text: "PLEASE FILL",
        photo_right: true,
        photo: gddc_1
    },
    {
        header: "When is it?",
        text: "PLEASE FILL",
        photo_right: false,
        photo: gddc_2
    },
    {
        header: "Who can sign up?",
        text: "PLEASE FILL",
        photo_right: true,
        photo: gddc_3
    },
    {
        header: "How do I sign up?",
        text: "PLEASE FILL",
        photo_right: false,
        photo: gddc_4
    },
]


const buildCardList = () => {
    return (
        <div className="flex flex-wrap w-full">
            { data.map((x: Data) => buildCard(x)) }
        </div>
    )
}

const buildCard = (data: Data) => {
    const text_box = (
        <div className="text-center sm:min-w-[50%] w-full">
            <div className="text-xl text-[#7848D5] font-serif font-bold text-[32px]">
                {data.header}
            </div>
            <div className="text-sm">
                {data.text} 
            </div>
        </div>
    )

    const photo = (
        <div>
            <img className="block mx-auto rounded-lg sm:w-[100%] p-2 sm:p-1 w-full" src={data.photo} />
        </div>
    )

    return (
        <div className="flex sm:flex-row flex-col sm:min-h-[300px] sm:w-[90%] justify-center w-full mx-auto">
            {data.photo_right ? (
                <>
                    {text_box} 
                    <div className="hidden sm:block">{photo}</div>
                </>
            ) : (
                <>
                    <div className="hidden sm:block">{photo}</div>
                    {text_box}
                </>
            )}
        </div>
    )
}

const GDDC = () => {
    return (
        <>
            <Header /> 
            <div className="flex flex-col w-full h-full bg-gray-950 overflow-y-scroll">
                <div className="flex flex-col w-full items-center justify-center">
                    <div className="w-full font-serif text-[32px] font-bold text-center">
                        {"Great Dane Defense Competition"}
                    </div>
                    <div>
                        <img className="block mx-auto w-[90%] rounded-md pb-8" src={croppedCompetition} />
                    </div>
                </div>
                { buildCardList() }
            </div>
        </>
    )
}

export default GDDC