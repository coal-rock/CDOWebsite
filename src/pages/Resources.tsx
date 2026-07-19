import PageLayout from "../components/PageLayout.tsx";
import AccordionMenu from "../components/AccordionMenu.tsx";
import Section from "../components/Section.tsx";
import {resourceTopics} from "../data/resourcesData.tsx";

export default function Resources() {
    return (
        <PageLayout>
            <Section
                title='Helpful Resources'
                variant='header'
            >
                <p>
                    Whether you're looking to study for a
                    certification or brush up on some
                    knowledge, our collection of useful
                    information will be very useful to you!
                </p>
                <p className='text-stone-300'>
                    Disclaimer: All links here are posted for
                    educational purposes. Neither CDO, anyone
                    on E-Board, nor UAlbany is responsible for the
                    misuse of these links/resources
                    contained in the links. In other words, please
                    use them responsibly.
                </p>
                <AccordionMenu items={resourceTopics}/>
            </Section>
        </PageLayout>
    )
}

