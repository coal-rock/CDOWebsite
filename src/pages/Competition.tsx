import PageLayout from "../components/PageLayout.tsx";
import Button from "../components/Button.tsx";
import Section from "../components/Section.tsx";

export default function Competition() {
    const images = import.meta.glob('../assets/competition/*.jpg', {
        eager: true,
        query: '?url',
        import: 'default'
    })
    const imagesUrls = Object.values(images)
    return (
        <PageLayout>
            <Section
                title='Compete in GDDC'
                variant='header'
            >
                <p className='text-white'>
                    The Great Dane Defense Competition
                    (GDDC) is a defensive security
                    competition hosted by UAlbany CDO.
                </p>
                <p className='text-stone-300'>
                    Competitors operate a simulated
                    environment and defend against red-team
                    adversaries attempting to hinder their
                    operations and maintain persistence.
                    Competitors are also required to complete
                    tasks throughout the competition that reflect
                    real-world business operations.
                </p>
                <div className='w-full max-w-sm space-y-6 mt-6 mx-auto'>
                    <Button text='REGISTER FOR FALL 2026' variant='primary' showArrow to={window.location.pathname}/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                    {imagesUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url as string}
                            alt={`GDDC Competition Photo ${index + 1}`}
                            className='rounded-2xl border-1 border-indigo-400'
                        />
                    ))}
                </div>
            </Section>
        </PageLayout>
    )
}