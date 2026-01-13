import Header from "../components/Header"

// Don't love all this data here, but it works
const data = [
    {
        years: "2025-2026",
        alumni: [
            { title: "President", name: "Dylan Tarace" },
            { title: "Vice President", name: "Nicholas Coppola" },
            { title: "CTO", name: "Cole Brazinski" },
            { title: "Marketing", name: "Lily Yang" },
            { title: "Treasurer", name: "Zoe Winden" },
            { title: "Red Team Captain", name: "Jonathan Edwards" },
            { title: "Red Team Co-Captain", name: "Matthew Waskiewicz" },
            { title: "Blue Team Captain", name: "Roberto Friedlander" },
            { title: "Blue Team Co-Captain", name: "Zion Smith" },
            { title: "Blue Team Co-Captain", name: "Samuel Maxwell" },
        ]
    },
    {
        years: "2024-2025",
        alumni: [
            { title: "President", name: "Dylan Tarace" },
            { title: "Vice President", name: "Jonathan Edwards" },
            { title: "CTO", name: "Tyler Barnes" },
            { title: "Marketing", name: "Tiffany Yang" },
            { title: "Secretary", name: "Tiffany Yang" },
            { title: "Treasurer", name: "Shoshanna Kusa" },
            { title: "Red Team Captain", name: "Dylan Tarace" },
            { title: "Blue Team Captain", name: "Roberto Friedlander" },
            { title: "Blue Team Co-Captain", name: "Jeremy Anthony" },
        ]
    },
    {
        years: "2023-2024",
        alumni: [
            { title: "President", name: "Liam Mengler" },
            { title: "Vice President", name: "Michael DeSocio" },
            { title: "CTO", name: "Danial Andrawis" },
            { title: "Marketing", name: "Tiffany Yang" },
            { title: "Secretary", name: "Samantah Solanto" },
            { title: "Treasurer", name: "Shoshanna Kusa" },
            { title: "Red Team Captain", name: "Nisanth Nidimpall" },
            { title: "Red Team Co-Captain", name: "Dylan Tarace" },
            { title: "Blue Team Captain", name: "Thomas Wu" },
            { title: "Blue Team Co-Captain", name: "Anton Marino" },
        ]
    },
    {
        years: "2022-2023",
        alumni: [
            { title: "President", name: "Collin Clark" },
            { title: "Vice President", name: "Mike Antoniades" },
            { title: "CTO", name: "Michael DeSocio" },
            { title: "Marketing", name: "Tiffany Yang" },
            { title: "Secretary", name: "Samantha Solanto" },
            { title: "Treasurer", name: "Shoshanna Kusa" },
            { title: "Red Team Captain", name: "Mike Antoniades" },
            { title: "Red Team Co-Captain", name: "Nisanth Nidimpall" },
            { title: "Blue Team Captain", name: "Jacob Booth" },
            { title: "Blue Team Co-Captain", name: "Daniel Andrawis" },
        ]
    },
    {
        years: "2020-2021",
        alumni: [
            { title: "President", name: "Max Kirby" },
            { title: "Vice President", name: "Jonathan Matza" },
            { title: "CTO", name: "Ben Olm" },
            { title: "Marketing", name: "Mark Tretyak" },
            { title: "Secretary", name: "Emily Sakur" },
            { title: "Treasurer", name: "Kayla Ibrahim" },
        ],
    },
    {
        years: "2019-2020",
        alumni: [
            { title: "President", name: "Liam Smith" },
            { title: "Vice President", name: "Anthony Capece" },
            { title: "Marketing", name: "Mark Tretyak" },
            { title: "Secretary", name: "William Kimler V" },
            { title: "Treasurer", name: "Kayla Ibrahim" },
            { title: "Blue Team Captain", name: "Max Kirby" },
        ]
    },
    {
        years: "2018-2019",
        alumni: [
            { title: "President", name: "Liam Smith" },
            { title: "Vice President", name: "Anthony Capece" },
            { title: "CTO", name: "Eric Carpenter" },
            { title: "Marketing", name: "Mark Tretyak" },
            { title: "Secretary", name: "Livia Hendrickson" },
            { title: "Blue Team Captain", name: "Michael Lim" },
            { title: "Blue Team Co-Captain", name: "Daunte Kinsey" },
        ]
    },
    {
        years: "2017-2018",
        alumni: [
            { title: "President", name: "Amanad Lubeskie" },
            { title: "Vice President", name: "Anthony Capece" },
            { title: "Marketing", name: "Liam Smith" },
            { title: "Treasurer", name: "Liam Smith" },
            { title: "CTO", name: "Ryan Foster" },
            { title: "Secretary", name: "Faith Mills" },
            { title: "Blue Team Captain", name: "Michael Lim" },
            { title: "Blue Team Co-Captain", name: "Daunte Kinsey" }
        ]
    },
]

const buildMemberList = () => {
    return (
        <div className="w-full">
            { data.map((x: any) => buildCards(x)) }
        </div>
    )
}

// Seperates out by years. Allows for us to seperate out alumni by year
// later down the road if we would like.
const buildCards = (yearsInfo: {years: string, alumni: []}) => {
    return (
        <div className="flex flex-col items-center">
            { yearsInfo.alumni.map((x) => buildCard(x, yearsInfo.years)) }
        </div>
    )
}

const buildCard = (person: {title: string, name: string}, year: string) => {
    return (
        <div 
           className="flex flex-col sm:flex-row w-11/12 items-center sm:justify-between bg-[#606060] rounded-lg m-2.5 p-3 font-bold">
            <div className="text-xl">
                { person.name }
            </div>
            <div className="text-sm sm:text-xl">
                { person.title } ({year})
            </div>
        </div>
    )
}

const Alumni = () => {
    // What font?
    return (
        <>
            <Header /> 
            <div className="flex flex-col w-full h-full items-center bg-gray-950 overflow-y-scroll">
                <div className="flex flex-col w-full items-center justify-center bg-gradient-to-r from-[#7848D5] to-[#3F266F]">
                    <div className="text-4xl pt-18">
                        {"Our Alumni"}
                    </div>
                    <div className="pt-6 pb-18 text-center max-w-xl px-4">
                        {"Check out our amazing alumni and their contributions to our club"}
                    </div>
                </div>
                <div className="flex flex-col w-full h-full items-center">
                    <div className="text-3xl mt-10 pt-4 pb-12">
                        {"Past Members"}
                    </div>
                    { buildMemberList() }
                </div>
            </div>
        </>
    );
}

export default Alumni
