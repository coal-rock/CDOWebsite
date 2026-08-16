import PageLayout from '../components/PageLayout.tsx'
import Workshop from "../assets/workshop.webp";

export default function Home() {
    return (
        <PageLayout
            title={<>CYBER DEFENSE<br />ORGANIZATION</>}
            description="We are a student-run organization dedicated to expanding knowledge of cybersecurity and teaching practical skills that help students to prepare for careers in this rapidly evolving field."
            image={Workshop}
        >
            <div>
                HI
            </div>
        </PageLayout >
    )
}
