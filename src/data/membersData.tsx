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

export const eBoardMembers = [
    { name: 'Zoe Winden', position: 'President', headshot: board.zoe },
    { name: 'Cole Brazinski', position: 'Vice President', headshot: board.coal },
    { name: 'Samuel Nava', position: 'Chief Technician', headshot: board.samn },
    { name: 'Mesyah Thomas-Harvey', position: 'Treasurer', headshot: board.mesyah },
    { name: 'Xavier Daniel', position: 'Secretary', headshot: board.xavier },
    { name: 'Jacob McNamara', position: 'Marketing', headshot: board.nophoto }
]
export const cBoardMembers = [
    { name: 'Panos Katsanis', position: 'Blue Team Captain', headshot: board.panos },
    { name: 'Elijah Williams', position: 'Blue Team Co-Captain', headshot: board.elijah },
    { name: 'Michael Conaway', position: 'Red Team Captain', headshot: board.michael },
    { name: 'Isaac Visconti', position: 'Red Team Co-Captain', headshot: board.nophoto }
]
export const alumniMembers = [
    { name: 'Dylan Tarace', position: 'Consultant Engineer', headshot: board.dylan },
    { name: 'Nicholas Coppola', position: 'Data Center Networks Assistant', headshot: board.nick },
    { name: 'Matthew Waskiewicz', position: 'Enterprise Network Services Assistant', headshot: board.matt },
    { name: 'Roberto Friedlander', position: 'IT Security Analyst', headshot: board.berto },
    { name: 'Jonathan Edwards', position: 'Information Security Intern', headshot: board.jon },
    { name: 'Tyler Barnes', position: 'Cybersecurity Intern', headshot: board.tyler },
]
