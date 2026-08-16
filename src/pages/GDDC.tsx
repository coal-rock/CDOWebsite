import PageLayout from "../components/PageLayout.tsx";
import Button from "../components/Button.tsx";
import Section from "../components/Section.tsx";
import GDDCImage from '../assets/gddc.jpg';

export default function GDDC() {
    return (
        <PageLayout
            title="COMPETE IN GDDC"
            description="Compete in the Great Dane Defense Competition! Our premiere red-vs-blue cyber defense competition. Complete injects, solve CTFs, secure endpoints, and maintain system uptime during simulated cyber warfare."
            image={GDDCImage}

        >
            <Section
                title='OVERVIEW'
            >
                <p className='text-[#e0e0e0]'>
                    GDDC is a red-vs-blue team competition, assessing students’ ability to deal with a high-pressure,
                    technically demanding simulation of a real-world incident response scenario.
                    Competition teams are challenged with maintaining service availability and defending systems under the constant pressure of active attacks from our student and alumni Red Team.
                    While working to secure their systems, teams are tasked with implementing business objectives,
                    completing capture-the-flag challenges, and communicating incidents to C-suite executives.
                </p>
            </Section>

            <Section
                title='SCHEDULE'
            >
                <p className='text-[#e0e0e0]'>
                    GDDC is hosted once per-semester, with events usually taking place in mid November and April.
                    The competition runs from 8:00am to 4:30pm, with hands-on keyboard being between 9:00am and 4:00pm.
                    Food and drinks are always provided!
                </p>
            </Section>

            <Section
                title='GET INVOLVED'
            >
                <p className='text-[#e0e0e0]'>
                    Our competition for the 2026-2027 Fall semester is still under constructions, with a tentative date of November 14th!
                    Make sure to join our Discord and attend our weekly workshops to stay in the loop!
                </p>
            </Section>
        </PageLayout>
    )
}
