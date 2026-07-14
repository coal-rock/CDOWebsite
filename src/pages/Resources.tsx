import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AccordionMenu from "../components/AccordionMenu.tsx";

export default function Resources() {

    const resourceTopics = [
        'Certifications',
        'Cloud Security',
        'Defense/Blue-Teaming',
        'Digital Forensics',
        'Incident Response',
        'General IT Security',
        'Malware Analysis',
        'Pen Testing/Red-Teaming',
        'Threat Intelligence'
    ]

    return (
        <>
            <Header/>
            <div className='min-h-screen bg-gray-950 flex flex-col w-full'>
                <div className='flex-grow flex flex-col items-start w-full px-4 pt-12'>

                    {/* Header & Underline */}
                    <div className='flex flex-col items-start'>
                        <h1 className='text-5xl font-medium text-white leading-tight'>
                            Helpful
                            Resources
                        </h1>
                        {/* The short underline from the reference */}
                        <hr className='w-16 border-indigo-400 mt-4 mb-4'/>
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-4 text-left'>
                        <p className='text-lg text-white'>
                            Whether you're looking to study for a
                            certification or brush up on some
                            knowledge, our collection of useful
                            information will be very useful to you!
                        </p>
                        <p className='text-stone-300'>
                            Disclaimer: All links here are posted for
                            educational purposes. neither CDO, anyone
                            on E-Board, nor UAlbany is responsible for the
                            misuse of these links/resources
                            contained in the links. In other words, please
                            use them responsibly.
                        </p>
                    </div>
                    <AccordionMenu items={resourceTopics}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

