import PageLayout from "../components/PageLayout.tsx";
import Workshop from "../assets/workshop.jpg"
import Section from "../components/Section.tsx";

export default function Workshops() {
    return (
        <PageLayout
            title="WORKSHOPS"
            description={<>Participate in technical, hands-on workshops to hone your skills, and gain real-world cyber experience. <br /> <br /> Wednesdays 6 PM @ LC3B <br /> All skill levels welcome!</>}
            image={Workshop}
        >
            <Section
                title='TOPICS'
            >
                <p className='text-[#e0e0e0]'>
                    Our workshops regularly cover real-world offensive and defensive cybersecurity techniques, as well as networking and job readiness.
                    Planned topics for the upcoming semester include:
                </p>
                <p className='text-[#e0e0e0] pt-1'>
                    <ul className="list-disc list-inside">
                        <li>Linux Fundamentals</li>
                        <li>Network Enumeration</li>
                        <li>Penetration Testing</li>
                        <li>IoT Hacking</li>
                        <li>SIGINT + RF</li>
                        <li>Operational Security</li>
                        <li>Routing and Switching</li>
                    </ul>
                </p>
            </Section>

            <Section
                title='REQUIREMENTS'
            >
                <p className='text-[#e0e0e0]'>
                    Workshops are open to members of all skill levels, and require no prerequisite cybersecurity experience!
                    It is recommended to bring your own personal laptop for the hands-on portion of our workshops, however, we can provide a temporary laptop if necessary.
                </p>
            </Section>

            <Section
                title="WHAT'S NEXT?"
            >
                <p className="text-[#e0e0e0] pb-2">
                    Our workshops are usually split into two parts:

                    <ul className="list-disc list-inside py-1">
                        <li>A short, lecture portion consisting of slides and live demos</li>
                        <li>A guided, hands-on portion where you'll actually get to use one of the techniques discussed during the lecture.</li>
                    </ul>
                </p>

                <p className='text-[#e0e0e0]'>
                    Everything you'll need to get started will be provided to you! All you need to do is show up!<br />
                    Workshops are almost always hosted in <span className="underline">LC3B every Wednesday at 6pm</span>, though be sure to join our Discord for updates!
                </p>

            </Section>
        </PageLayout >
    )
}

