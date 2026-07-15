import {Link} from 'react-router';

import Header from '../components/Header';
import Footer from "../components/Footer.tsx";

import gddc2026 from '../assets/community.jpg'

export default function Home() {
    return (
        <>
            <Header/>
            <div className='flex flex-col w-full h-full items-start bg-gray-950 overflow-y-scroll'>
                <div className='flex flex-col items-start w-full gap-6 px-3 pt-8 mt-12'>

                    {/* Header & Underline */}
                    <div className='flex flex-col items-start gap-4'>
                        <h1 className='text-5xl font-medium text-white leading-tight'>
                            Cyber <span className='text-indigo-400'>Defense</span><br/>Organization
                        </h1>
                        <hr className='w-16 border-t-2 border-indigo-400 mt-2'/>
                    </div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-4 text-left'>
                        <p className='text-lg text-white'>
                            Practical cybersecurity experience for UAlbany students through competitions, workshops, and
                            community.
                        </p>
                        <p className='text-base text-stone-300'>
                            Whether you've never touched a terminal or are a seasoned professional, come learn more with
                            us!
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='flex flex-col w-full gap-4 mt-4'>

                        <button
                            className='text-xl flex justify-center items-center gap-2 bg-[#6E4BFF] text-white font-medium py-2 w-full rounded hover:bg-indigo-500 transition-colors tracking-wide'>
                            GET INVOLVED <span className='text-4xl -translate-y-1'>&rarr;</span>
                        </button>
                        <button
                            className='text-xl bg-transparent border border-white text-stone-300 font-medium py-3 w-full rounded hover:bg-gray-800 transition-colors tracking-wide'>
                            SEE WHAT'S HAPPENING
                        </button>
                    </div>

                    {/* --- WHAT WE DO SECTION --- */}
                    <div className='flex flex-col w-full mt-16 mb-8'>

                        {/* Section Header */}
                        <div className='flex items-center gap-4 w-full'>
                            <h2 className='text-2xl font-medium text-white whitespace-nowrap'>What We Do</h2>
                            <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                        </div>

                        {/* Workshops */}
                        <div className='flex flex-col gap-6 w-full mt-8 px-4'>
                            <div className='flex items-center'>
                                <svg width='80' height='80' viewBox='0 0 24 24' fill='currentColor'
                                     className='text-white'>
                                    <polygon points='24,17 20,17 20,15 22,15 22,3 4,3 4,5 2,5 2,1 24,1'/>
                                    <rect x='10' width='6' height='4'/>
                                    <path
                                        d='M13,24H0v-5c0-2.3,1.3-4.4,3.3-5.4C2.5,12.8,2,11.7,2,10.5C2,8,4,6,6.5,6S11,8,11,10.5c0,0.7-0.1,1.3-0.4,1.8 c1.4-0.6,3.4-1.8,5.7-4.1l2-2l1.4,1.4L18.4,9l1.8,1.8l-0.3,0.6c-0.1,0.2-2.4,5.5-6.6,7.2C13.1,18.7,13,18.8,13,19V24z M2,22h9v-3 c0-1,0.6-1.9,1.5-2.3c2.7-1.1,4.6-4.2,5.3-5.5L17,10.4C12.1,15,8.4,15,8,15H6c-2.2,0-4,1.8-4,4V22z M6.5,13C7.9,13,9,11.9,9,10.5 S7.9,8,6.5,8S4,9.1,4,10.5S5.1,13,6.5,13z'/>
                                </svg>
                                <h3 className='text-3xl text-white font-medium ml-6'>Workshops</h3>
                            </div>
                            <p className='text-xl text-white leading-relaxed'>
                                We hold weekly workshops during the semester to teach members new security skills.
                            </p>
                            <Link to='/'
                                  className='text-[#A5B4FC] font-mono font-bold tracking-widest text-xl hover:text-white transition-colors mt-2'>
                                SEE WHAT'S HAPPENING &rarr;
                            </Link>
                            <hr className='w-3/4 mx-auto border-t-2 border-gray-600 mt-4'/>
                        </div>

                        {/* Community */}
                        <div className='flex flex-col gap-6 w-full mt-8 px-4'>
                            <div className='flex items-center'>
                                <svg fill='currentColor' width='80px' height='80px' viewBox='0 0 256 256'
                                     className='text-white'>
                                    <path
                                        d='M29.59473,123.19629a4,4,0,0,0,5.60058-.7959,56.0083,56.0083,0,0,1,89.60742-.002c.02344.03076.05274.053.07666.083a3.96225,3.96225,0,0,0,.33887.36767c.07959.07813.15869.15479.24414.2251.04688.03857.083.0852.13233.12207.09131.0686.18945.11963.28418.1792.05713.03564.11181.07446.16992.10693a3.97077,3.97077,0,0,0,.59668.27344c.01953.00684.03711.01709.05664.02368a3.97126,3.97126,0,0,0,.71875.17358c.03467.00489.06982.00391.10449.00806a4.0407,4.0407,0,0,0,.46875.03687c.03272,0,.06445-.01026.09717-.011a4.01382,4.01382,0,0,0,.63867-.07251c.06445-.01221.13037-.01367.19434-.02881a3.99451,3.99451,0,0,0,.812-.28735c.05273-.02564.09912-.06372.15137-.09155a4.02358,4.02358,0,0,0,.51611-.3125c.02539-.019.04346-.04346.06836-.063.07178-.05713.13525-.12549.20361-.188a3.97734,3.97734,0,0,0,.44092-.46094c.02441-.03027.05518-.051.07861-.082a56.0083,56.0083,0,0,1,89.60742-.002,4,4,0,1,0,6.39649-4.80469A63.58068,63.58068,0,0,0,194.69775,94.7522a36,36,0,1,0-37.3955,0A63.34185,63.34185,0,0,0,128,113.69482,63.34,63.34,0,0,0,98.69775,94.7522a36,36,0,1,0-37.3955,0,63.5829,63.5829,0,0,0-32.50342,22.8435A4.00032,4.00032,0,0,0,29.59473,123.19629ZM148,64a28,28,0,1,1,28,28A28.03146,28.03146,0,0,1,148,64ZM52,64A28,28,0,1,1,80,92,28.03146,28.03146,0,0,1,52,64ZM194.69775,198.7522a36,36,0,1,0-37.3955,0A63.34185,63.34185,0,0,0,128,217.69482,63.34,63.34,0,0,0,98.69775,198.7522a36,36,0,1,0-37.3955,0,63.5829,63.5829,0,0,0-32.50342,22.8435,4,4,0,1,0,6.39648,4.80469,56.0083,56.0083,0,0,1,89.60742-.00195c.02344.03076.05274.053.07666.083a3.96225,3.96225,0,0,0,.33887.36767c.07959.07788.15869.15479.24365.22485.04688.03882.0835.08545.13282.12232.09179.06885.19043.12012.28564.17993.05615.0354.11035.07349.168.10571a3.94083,3.94083,0,0,0,.60352.27637c.0166.0061.03222.01489.04931.02075a3.97746,3.97746,0,0,0,.72217.17407c.02978.0044.06055.00342.09082.00733a4.06583,4.06583,0,0,0,.48.0376c.03369,0,.06641-.0105.09961-.01123a3.98954,3.98954,0,0,0,.62354-.071c.06982-.01269.14013-.0144.209-.031a3.94991,3.94991,0,0,0,.80859-.28614c.05567-.02661.1045-.0664.15869-.0957a4.01175,4.01175,0,0,0,.51026-.30859c.02539-.01905.04346-.04346.06836-.063.07178-.05713.13525-.12549.20361-.188a3.97734,3.97734,0,0,0,.44092-.46094c.02441-.03027.05518-.051.07861-.082a56.0083,56.0083,0,0,1,89.60742-.00195,4,4,0,1,0,6.39649-4.80469A63.58068,63.58068,0,0,0,194.69775,198.7522ZM52,168a28,28,0,1,1,28,28A28.03146,28.03146,0,0,1,52,168Zm96,0a28,28,0,1,1,28,28A28.03146,28.03146,0,0,1,148,168Z'/>
                                </svg>
                                <h3 className='text-3xl text-white font-medium ml-6'>Community</h3>
                            </div>
                            <p className='text-xl text-white leading-relaxed'>
                                We’ve built a thriving Discord community that allows members to discuss security and
                                share
                                resources.
                            </p>
                            <Link to='/'
                                  className='text-[#A5B4FC] font-mono font-bold tracking-widest text-xl hover:text-white transition-colors mt-2'>
                                JOIN US ON DISCORD &rarr;
                            </Link>
                            <hr className='w-3/4 mx-auto border-t-2 border-gray-600 mt-4'/>
                        </div>

                        {/* Competition */}
                        <div className='flex flex-col gap-6 w-full mt-8 px-4'>
                            <div className='flex items-center'>
                                <svg width='80' height='80' viewBox='0 0 65 30' fill='none' className='text-white'>
                                    <g transform='translate(1.000000, 1.000000)'>
                                        <path stroke='currentColor' strokeWidth='2'
                                              d='M60.1,7h-16c-1.1,0-2,0.9-2,2v4.083V2c0-1.1-0.9-2-2-2h-20c-1.1,0-2,0.9-2,2v15.583V14c0-1.1-0.9-2-2-2h-14c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h58c1.1,0,2-0.9,2-2V9C62.1,7.9,61.2,7,60.1,7L60.1,7z'/>
                                        <path stroke='currentColor' strokeWidth='2' d='M27.1,15l3-3v9'/>
                                        <path stroke='currentColor' strokeWidth='2'
                                              d='M50.1,16c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2c0,3.3-4,6-4,6h5'/>
                                        <path stroke='currentColor' strokeWidth='2'
                                              d='M7.1,21.9c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2'/>
                                    </g>
                                </svg>
                                <h3 className='text-3xl text-white font-medium ml-6'>Competition</h3>
                            </div>
                            <p className='text-xl text-white leading-relaxed'>
                                We attend competitions focusing on red, blue, and purple teaming and even host our own
                                each
                                semester!
                            </p>
                            <Link to='/'
                                  className='text-[#A5B4FC] font-mono font-bold tracking-widest text-xl hover:text-white transition-colors mt-2'>
                                LEARN ABOUT GDDC &rarr;
                            </Link>
                            <hr className='w-3/4 mx-auto border-t-2 border-gray-600 mt-4'/>
                        </div>

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
                            <h2 className='text-2xl font-medium text-white whitespace-nowrap'>What's Happening</h2>
                            <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                        </div>

                        <div className='flex flex-col gap-6 w-full mt-8 px-4'>
                            <div className='flex items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'
                                     fill='none' className='text-white'>
                                    <path
                                        d='M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <h3 className='text-xl text-white font-light ml-6'>Weekly Workshop<br/> Wednesday, Jan
                                    18th @ 6:30pm</h3>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'
                                     fill='none' className='text-white'>
                                    <path
                                        d='M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <h3 className='text-xl text-white font-light ml-6'>Weekly Workshop<br/> Wednesday, Jan
                                    18th @ 6:30pm</h3>
                            </div>
                            <div className='flex items-center'>

                                <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'
                                     className='text-white'>

                                    {/* 1. The Outer Blank Calendar Frame */}
                                    <path
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z'
                                    />

                                    {/* 2. The Inner Document (Scaled down by half and nudged into the center) */}
                                    <g transform='translate(6, 9.5) scale(0.5)'>
                                        <path
                                            fill='currentColor'
                                            d='M7 12.5538H6.25C6.25 12.5713 6.25061 12.5888 6.25183 12.6062L7 12.5538ZM7.782 13.2398V12.4898C7.76683 12.4898 7.75167 12.4903 7.73653 12.4912L7.782 13.2398ZM17.217 13.2398L17.3055 12.4951C17.2761 12.4916 17.2466 12.4898 17.217 12.4898V13.2398ZM17.8805 12.9231L18.5153 13.3225V13.3225L17.8805 12.9231ZM17.879 12.1878L18.5121 11.7858C18.5046 11.7739 18.4967 11.7622 18.4885 11.7508L17.879 12.1878ZM15.943 9.48782L16.5526 9.05075L16.5467 9.04282L15.943 9.48782ZM15.943 8.75682L16.5468 9.20187L16.5525 9.19386L15.943 8.75682ZM17.879 6.05682L18.4885 6.49386C18.4967 6.48242 18.5046 6.47075 18.5121 6.45887L17.879 6.05682ZM17.8805 5.32159L18.5153 4.92214L18.5153 4.92214L17.8805 5.32159ZM17.217 5.00482V5.75482C17.2466 5.75482 17.2761 5.75307 17.3055 5.74958L17.217 5.00482ZM7.782 5.00482L7.73653 5.75344C7.75167 5.75436 7.76683 5.75482 7.782 5.75482V5.00482ZM7 5.69082L6.25183 5.63841C6.25061 5.65586 6.25 5.67334 6.25 5.69082H7ZM7.75 12.5538C7.75 12.1396 7.41421 11.8038 7 11.8038C6.58579 11.8038 6.25 12.1396 6.25 12.5538H7.75ZM6.25 19.0048C6.25 19.419 6.58579 19.7548 7 19.7548C7.41421 19.7548 7.75 19.419 7.75 19.0048H6.25ZM6.25183 12.6062C6.30892 13.4212 7.01201 14.038 7.82747 13.9884L7.73653 12.4912C7.73632 12.4912 7.73688 12.4912 7.73797 12.4913C7.73901 12.4915 7.74008 12.4917 7.74107 12.4921C7.74295 12.4927 7.74396 12.4935 7.74445 12.4939C7.74494 12.4943 7.74581 12.4952 7.7467 12.497C7.74718 12.498 7.74758 12.499 7.74786 12.5C7.74815 12.5011 7.74818 12.5016 7.74817 12.5014L6.25183 12.6062ZM7.782 13.9898H17.217V12.4898H7.782V13.9898ZM17.1285 13.9846C17.6798 14.0501 18.2196 13.7924 18.5153 13.3225L17.2457 12.5236C17.2585 12.5034 17.2818 12.4922 17.3055 12.4951L17.1285 13.9846ZM18.5153 13.3225C18.811 12.8526 18.8098 12.2545 18.5121 11.7858L17.2459 12.5899C17.233 12.5697 17.233 12.5439 17.2457 12.5236L18.5153 13.3225ZM18.4885 11.7508L16.5525 9.05079L15.3335 9.92486L17.2695 12.6249L18.4885 11.7508ZM16.5467 9.04282C16.5816 9.09009 16.5816 9.15455 16.5467 9.20183L15.3393 8.31182C14.984 8.79376 14.984 9.45088 15.3393 9.93283L16.5467 9.04282ZM16.5525 9.19386L18.4885 6.49386L17.2695 5.61979L15.3335 8.31979L16.5525 9.19386ZM18.5121 6.45887C18.8098 5.99018 18.811 5.39204 18.5153 4.92214L17.2457 5.72104C17.233 5.70078 17.233 5.67499 17.2459 5.65478L18.5121 6.45887ZM18.5153 4.92214C18.2196 4.45224 17.6798 4.19454 17.1285 4.26007L17.3055 5.74958C17.2818 5.75241 17.2585 5.7413 17.2457 5.72104L18.5153 4.92214ZM17.217 4.25482H7.782V5.75482H17.217V4.25482ZM7.82747 4.2562C7.01201 4.20667 6.30892 4.82344 6.25183 5.63841L7.74817 5.74323C7.74818 5.74303 7.74815 5.74359 7.74786 5.74465C7.74758 5.74566 7.74718 5.74669 7.7467 5.74762C7.74581 5.7494 7.74494 5.7503 7.74445 5.75073C7.74396 5.75116 7.74295 5.75191 7.74107 5.75257C7.74008 5.75291 7.73901 5.75317 7.73797 5.75332C7.73688 5.75347 7.73632 5.75343 7.73653 5.75344L7.82747 4.2562ZM6.25 5.69082V12.5538H7.75V5.69082H6.25ZM6.25 12.5538V16.2987H7.75V12.5538H6.25ZM6.25 16.2987V19.0048H7.75V16.2987H6.25Z'
                                        />
                                    </g>

                                </svg>
                                <h3 className='text-xl text-white font-light ml-6'>Competition<br/> Wednesday, Jan
                                    18th @ 6:30pm</h3>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'
                                     fill='none' className='text-white'>
                                    <path
                                        d='M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <h3 className='text-xl text-white font-light ml-6'>Weekly Workshop<br/> Wednesday, Jan
                                    18th @ 6:30pm</h3>
                            </div>
                        </div>
                    </div>
                    {/* --- END WHAT'S HAPPENING SECTION --- */}

                    {/* --- WHAT'S GDDC SECTION --- */}
                    <div className='flex flex-col w-full mb-8 py-20'>
                        {/* Section Header */}
                        <div className='flex items-center gap-4 w-full px-4 text-white'>
                            <h2 className='text-xl font-medium whitespace-nowrap'>What's GDDC?</h2>
                            <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                        </div>
                        <p className='font-medium px-4 text-xl p-4  text-white'>
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
                        <button
                            className='text-xl bg-transparent border-indigo-200 border-2 text-indigo-200 font-medium py-1 w-3/4 rounded hover:bg-gray-800 transition-colors tracking-wide'>
                            SEE US IN ACTION! <span className='text-2xl -translate-y-1'>&rarr;</span>
                        </button>
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
                            <h2 className='text-4xl font-medium whitespace-nowrap text-white'>Join Us!</h2>
                            <hr className='flex-grow border-t-2 border-indigo-400 opacity-50'/>
                        </div>
                        <p className='font-medium px-4 text-xl p-4 text-stone-300'>
                            Stop by one of our workshops, join our
                            Discord community, or reach out to us on
                            Instagram. We’re happy to have you!
                        </p>

                        <button
                            className='text-xl flex justify-center items-center gap-2 py-2 bg-[#6E4BFF] text-white font-medium w-full rounded hover:bg-indigo-500 transition-colors tracking-wide'>
                            GET INVOLVED <span className='text-xl -translate-y-1'>&rarr;</span>
                        </button>
                    </div>
                    {/* --- END JOIN US SECTION --- */}
                </div>
                <Footer/>
            </div>
        </>
    );
}
