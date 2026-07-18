import PageLayout from '../components/PageLayout.tsx'
import Button from "../components/Button.tsx";
import FeatureBlock from '../components/FeatureBlock.tsx'
import EventItem from '../components/EventItem.tsx'

import {featuresData, eventsData} from "../data/homeData.tsx";

import gddc2026 from '../assets/community.jpg'

export default function Home() {
    return (
        <PageLayout>
            <div className='flex flex-col items-start w-full gap-6 px-3 mt-12'>
                {/* Header & Underline */}
                <div className='flex flex-col items-start gap-4'>
                    <h1 className='text-5xl font-medium leading-tight'>
                        Cyber <span className='text-indigo-400'>Defense</span><br/>Organization
                    </h1>
                    <hr className='w-16 border-indigo-400 mt-2'/>
                </div>

                {/* Text Content */}
                <div className='flex flex-col gap-4 text-left'>
                    <p className='text-lg'>
                        Practical cybersecurity experience for UAlbany students through competitions, workshops, and
                        community.
                    </p>
                    <p className='text-stone-300'>
                        Whether you've never touched a terminal or are a seasoned professional, come learn more with
                        us!
                    </p>
                </div>

                {/* Buttons */}
                <Button text='GET INVOLVED' variant='primary' showArrow/>
                <Button text="SEE WHAT'S HAPPENING" variant='outline' showArrow/>

                {/* --- WHAT WE DO SECTION --- */}
                <div className='flex flex-col w-full mt-16 mb-8'>

                    {/* Section Header */}
                    <div className='flex items-center gap-4 w-full'>
                        <h2 className='text-2xl font-medium whitespace-nowrap'>What We Do</h2>
                        <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                    </div>

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
                {/* --- END WHAT WE DO SECTION --- */}

                {/* --- OUR MISSION SECTION --- */}
                <div className='flex flex-col w-full py-10 bg-indigo-100'>
                    {/* Section Header */}
                    <div className='flex items-center gap-4 w-full px-2 mb-4'>
                        <h2 className='text-2xl font-medium text-black whitespace-nowrap'>Our Mission</h2>
                        <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                    </div>
                    <p className='text-black font-medium px-2 text-3xl'>
                        We are a <span className='text-indigo-400'>student-run</span> organization dedicated to
                        expanding knowledge of <span className='text-indigo-400'>cybersecurity</span> and teaching
                        practical <span className='text-indigo-400'>skills</span> that help students to prepare for
                        careers in this rapidly evolving field.
                    </p>
                </div>
                {/* --- END OUR MISSION SECTION --- */}

                {/* --- WHAT'S HAPPENING SECTION --- */}
                <div className='flex flex-col w-full mt-8'>

                    {/* Section Header */}
                    <div className='flex items-center gap-4 w-full'>
                        <h2 className='text-2xl font-medium whitespace-nowrap'>What's Happening</h2>
                        <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                    </div>

                    <div className='flex flex-col gap-6 w-full mt-8 px-4'>
                        {eventsData.map((event, index) => (
                            <EventItem
                                key={index}
                                title={event.title}
                                date={event.date}
                                icon={event.icon}
                            />
                        ))}
                    </div>

                </div>
                {/* --- END WHAT'S HAPPENING SECTION --- */}

                {/* --- WHAT'S GDDC SECTION --- */}
                <div className='flex flex-col w-full mb-8 py-20'>
                    {/* Section Header */}
                    <div className='flex items-center gap-4 w-full px-4'>
                        <h2 className='text-xl font-medium whitespace-nowrap'>What's GDDC?</h2>
                        <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                    </div>
                    <p className='font-medium px-4 text-xl p-4 '>
                        The Great Dane Defense Competition
                        (GDDC) is a defensive security
                        competition hosted by UAlbany CDO.

                    </p>
                    <p className='font-light px-4 text-xl p-4 text-stone-300'>
                        Competitors operate a simulated environment
                        and defend against red-team adversaries
                        attempting to hinder their operations and
                        maintain persistence. Competitors are also
                        required to complete tasks throughout the
                        competition that reflect real-world business
                        operations.
                    </p>

                    <Button text='SEE US IN ACTION' variant='outline' showArrow/>
                </div>
                {/* --- END WHAT'S GDDC SECTION --- */}

                <img
                    alt={`Community Picture`}
                    src={gddc2026}
                />

                {/* --- JOIN US SECTION --- */}
                <div className='flex flex-col w-full py-10'>
                    {/* Section Header */}
                    <div className='flex items-center gap-4 w-full px-4'>
                        <h2 className='text-4xl font-medium whitespace-nowrap'>Join Us!</h2>
                        <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                    </div>
                    <p className='font-medium px-4 text-xl p-4 text-stone-300'>
                        Stop by one of our workshops, join our
                        Discord community, or reach out to us on
                        Instagram. We’re happy to have you!
                    </p>

                    <Button text='GET INVOLVED' variant='primary' showArrow/>
                </div>
                {/* --- END JOIN US SECTION --- */}
            </div>
        </PageLayout>
    )
}
