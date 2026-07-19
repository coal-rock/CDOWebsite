import PageLayout from '../components/PageLayout.tsx'
import Button from "../components/Button.tsx";
import FeatureBlock from '../components/FeatureBlock.tsx'
import EventItem from '../components/EventItem.tsx'
import Section from "../components/Section.tsx";
import {eventsData, featuresData} from "../data/homeData.tsx";
import gddc2026 from '../assets/community.jpg'

export default function Home() {
    return (
        <PageLayout>
            {/* --- MAIN SECTION --- */}
            <Section
                title={
                    <>
                        Cyber <span className='text-indigo-400'>Defense</span><br/>Organization
                    </>
                }
                variant='header'
            >
                <p>
                    Practical cybersecurity experience for UAlbany students through competitions, workshops, and
                    community.
                </p>
                <p className='text-stone-300'>
                    Whether you've never touched a terminal or are a seasoned professional, come learn more with
                    us!
                </p>
                <div className='w-full max-w-sm space-y-6 mt-6 mx-auto'>
                    <Button text='GET INVOLVED' variant='primary' showArrow to={window.location.pathname}/>
                    <Button text="SEE WHAT'S HAPPENING" variant='outline' showArrow to={window.location.pathname}/>
                </div>
            </Section>

            {/* --- WHAT WE DO SECTION --- */}
            <Section title='What We Do'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                    {featuresData.map((feature, index) => (
                        <FeatureBlock
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            linkText={feature.linkText}
                            linkUrl={feature.linkUrl}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </Section>
            {/* --- END WHAT WE DO SECTION --- */}

            {/* --- OUR MISSION SECTION --- */}
            <div className='w-full flex flex-col py-10 px-2 bg-indigo-100 text-black'>
                {/* Section Header */}
                <div className='flex items-center gap-4 w-full mb-6'>
                    <h2 className='text-2xl md:text-4xl font-medium  whitespace-nowrap'>Our Mission</h2>
                    <hr className='w-full border-1 border-indigo-400'/>
                </div>
                <p className='font-medium text-2xl md:text-3xl'>
                    We are a <span className='text-indigo-400'>student-run</span> organization dedicated to
                    expanding knowledge of <span className='text-indigo-400'>cybersecurity</span> and teaching
                    practical <span className='text-indigo-400'>skills</span> that help students to prepare for
                    careers in this rapidly evolving field.
                </p>
            </div>
            {/* --- END OUR MISSION SECTION --- */}

            {/* --- WHAT'S HAPPENING SECTION --- */}
            <Section title="What's Happening">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                    {eventsData.map((event, index) => (
                        <EventItem
                            key={index}
                            title={event.title}
                            date={event.date}
                            icon={event.icon}
                        />
                    ))}
                </div>
            </Section>
            {/* --- END WHAT'S HAPPENING SECTION --- */}

            {/* --- WHAT'S GDDC SECTION --- */}
            <Section title="What's GDDC?">
                <p>
                    The Great Dane Defense Competition
                    (GDDC) is a defensive security
                    competition hosted by UAlbany CDO.
                </p>
                <p className='text-stone-300'>
                    Competitors operate a simulated environment
                    and defend against red-team adversaries
                    attempting to hinder their operations and
                    maintain persistence. Competitors are also
                    required to complete tasks throughout the
                    competition that reflect real-world business
                    operations.
                </p>
                <div className='w-full md:w-1/3 mt-8 mx-auto'>
                    <Button text='SEE US IN ACTION' variant='outline' showArrow to={window.location.pathname}/>
                </div>
            </Section>
            {/* --- END WHAT'S GDDC SECTION --- */}

            {/* --- JOIN US SECTION --- */}
            <Section title='Join Us!'>
                <img
                    alt={`Community Picture`}
                    src={gddc2026}
                    className='rounded-2xl border-1 border-indigo-400 mb-6'
                />
                <p>
                    Stop by one of our workshops, join our
                    Discord community, or reach out to us on
                    Instagram. We’re happy to have you!
                </p>
                <div className='w-full md:w-1/3 mt-6 mx-auto'>
                    <Button text='GET INVOLVED' variant='primary' showArrow to={window.location.pathname}/>
                </div>
            </Section>
            {/* --- END JOIN US SECTION --- */}

        </PageLayout>
    )
}
