import PageLayout from "../components/PageLayout.tsx";
import AccordionMenu from "../components/AccordionMenu.tsx";

import {resourceTopics} from "../data/resourcesData.tsx";

export default function Resources() {
    return (
        <PageLayout>
            {/* Page Title & Underline */}
            <div className='flex flex-col items-start w-full'>
                <h1 className='text-4xl md:text-5xl font-medium leading-tight'>
                    Helpful Resources
                </h1>
                <hr className='w-16 border-indigo-400 mt-4'/>
            </div>

            {/* Text Content */}
            <div className='flex flex-col gap-4 text-left'>
                <p className='text-xl text-white'>
                    Whether you're looking to study for a
                    certification or brush up on some
                    knowledge, our collection of useful
                    information will be very useful to you!
                </p>
                <p className='text-lg text-stone-300'>
                    Disclaimer: All links here are posted for
                    educational purposes. Neither CDO, anyone
                    on E-Board, nor UAlbany is responsible for the
                    misuse of these links/resources
                    contained in the links. In other words, please
                    use them responsibly.
                </p>
            </div>

            <div className='w-full mt-4'>
                <AccordionMenu items={resourceTopics}/>
            </div>
        </PageLayout>
    )
}

