import PageLayout from "../components/PageLayout.tsx";
import Button from "../components/Button.tsx";

export default function Competition() {

    // Grab all the .jpg files in the competition folder
    const images = import.meta.glob('../assets/competition/*.jpg', {
        eager: true,
        query: '?url',
        import: 'default'
    })
    // Convert that raw data into an array of images
    const imagesUrls = Object.values(images)

    return (
        <PageLayout>
            <div className='flex flex-col items-start w-full gap-6 px-4 pt-8'>
                {/* Page Title & Underline */}
                <div className='flex-grow flex-col items-start'>
                    <h1 className='text-5xl font-medium leading-tight'>
                        Compete in GDDC
                    </h1>
                    <hr className='w-16 border-indigo-400 mt-4'/>
                </div>

                {/* Text Content */}
                <div className='flex flex-col gap-4 text-left'>
                    <p className='text-lg'>
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
                </div>

                {/* Button */}
                <Button text='REGISTER FOR FALL 2026' variant='primary' showArrow/>

                {/* Images */}
                <div className='flex flex-col gap-4 mt-6 mb-8'>
                    {imagesUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url as string}
                            alt={`GDDC Competition Photo ${index + 1}`}
                            className='w-full h-auto rounded-xl border-2 border-indigo-900/50'
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}