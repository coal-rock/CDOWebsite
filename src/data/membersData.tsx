import type { AlumniCardProps, BoardCardProps } from "../components/BoardCard";

const loadBoard = () => {
    const images = import.meta.glob('../assets/board/*', {
        eager: true,
        query: '?url',
        import: 'default'
    });

    return Object.fromEntries(
        Object.entries(images).map(([path, module]) => {
            const fileName = path.split('/').pop()!.replace('.png', '').replace('.jpg', '');
            return [fileName, module as string];
        })
    );
};

const board = loadBoard();

export const eBoardMembers: Array<BoardCardProps> = [
    { name: 'Zoe Winden', boardPosition: 'President', bio: 'chud', headshot: board.zoe },
    { name: 'Cole Brazinski', boardPosition: 'Vice President', bio: 'chud', headshot: board.coal },
    { name: 'Samuel Nava', boardPosition: 'Chief Technician', bio: 'chud', headshot: board.samn },
    { name: 'Mesyah Thomas-Harvey', boardPosition: 'Treasurer', bio: 'chud', headshot: board.mesyah },
    { name: 'Xavier Daniel', boardPosition: 'Secretary', bio: 'chud', headshot: board.xavier },
    { name: 'Jacob McNamara', boardPosition: 'Marketing', bio: 'chud', headshot: board.nophoto }
]

export const cBoardMembers: Array<BoardCardProps> = [
    { name: 'Panos Katsanis', boardPosition: 'Blue Team Captain', bio: 'chud', headshot: board.panos },
    { name: 'Elijah Williams', boardPosition: 'Blue Team Co-Captain', bio: 'chud', headshot: board.elijah },
    { name: 'Michael Conaway', boardPosition: 'Red Team Captain', bio: 'chud', headshot: board.michael },
    { name: 'Isaac Visconti', boardPosition: 'Red Team Co-Captain', bio: 'chud', headshot: board.nophoto }
]


export const alumniMembers: Array<AlumniCardProps> = [
    { name: 'Dylan Tarace', jobTitle: 'Security Engineer', company: 'DoD', headshot: board.dylan },
    { name: 'Nicholas Coppola', jobTitle: 'Data Center Network Engineer', company: 'NY ITS', headshot: board.nick },
    { name: 'Matthew Waskiewicz', jobTitle: 'Network Engineer', company: 'NY ITS', headshot: board.matt },
    { name: 'Roberto Friedlander', jobTitle: 'Security Analyst', company: "Stewart's Shops", headshot: board.berto },
    { name: 'Jonathan Edwards', jobTitle: 'Information Security Engineer', company: "CIS", headshot: board.jon },
    { name: 'Tyler Barnes', jobTitle: 'Security Engineer', company: "MITRE", headshot: board.tyler },
]
