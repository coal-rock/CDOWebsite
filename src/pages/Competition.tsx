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
            {/* Page Title & Underline */}
            <div className='flex flex-col items-start w-full'>
                <h1 className='text-4xl md:text-5xl font-medium leading-tight'>
                    Compete in GDDC
                </h1>
                <hr className='w-16 border-indigo-400 mt-4 mb-6'/>
            </div>

            {/* Text Content */}
            <div className='flex flex-col gap-4 text-left'>
                <p className='text-xl text-white'>
                    The Great Dane Defense Competition
                    (GDDC) is a defensive security
                    competition hosted by UAlbany CDO.
                </p>
                <p className='text-lg text-stone-300'>
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
            <div className='w-full md:w-1/3 mt-8'>
                <Button text='REGISTER FOR FALL 2026' variant='primary' showArrow/>
            </div>

            {/* Images */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4'>
                {imagesUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url as string}
                        alt={`GDDC Competition Photo ${index + 1}`}
                        className='w-full h-64 md:h-80 object-cover rounded-xl border border-indigo-400/50 shadow-lg'
                    />
                ))}

            </div>
        </PageLayout>
    )
}