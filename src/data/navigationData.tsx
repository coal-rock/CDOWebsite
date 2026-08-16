import {
    siDiscord,
    siGithub,
    siInstagram,
    siLinkedin,
    siYoutube,
} from 'simple-icons'

import SimpleIcon from '../components/SimpleIcon.tsx'

export const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Members',
        path: '/members'
    },
    {
        name: 'Workshops',
        path: '/workshops'
    },
    {
        name: 'GDDC',
        path: '/gddc'
    }
]

export const footerItems = [
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/@UACDO',
        svg: <SimpleIcon icon={siYoutube} label='YouTube' className='size-6 text-[#e0e0e0]' />
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cyber-defense-organization/posts/',
        svg: <SimpleIcon icon={siLinkedin} label='LinkedIn' className='size-6 text-[#e0e0e0]' />
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/ualbany_cdo',
        svg: <SimpleIcon icon={siInstagram} label='Instagram' className='size-6 text-[#e0e0e0]' />
    },
    {
        name: 'GitHub',
        link: 'https://github.com/CyberDefenseOrganization',
        svg: <SimpleIcon icon={siGithub} label='GitHub' className='size-6 text-[#e0e0e0]' />
    },
    {
        name: 'Discord',
        link: 'https://discord.gg/4cMyjj5Xq',
        svg: <SimpleIcon icon={siDiscord} label='Discord' className='size-6 text-[#e0e0e0]' />
    }
]
