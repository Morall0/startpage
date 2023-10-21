let slist=[
    {
        type: 'Time Out',
        sites: [
            {
                name: 'Youtube',
                link: 'https://www.youtube.com/',
                key: 'Y',
            },
            {
                name: 'Discord',
                link: 'https://discord.com/channels/@me',
                key: 'D',
            },
            {
                name: 'r/unixporn',
                link: 'https://www.reddit.com/r/unixporn/',
                key: 'R',
            },
            {
                name: 'WhatsApp',
                link: 'https://web.whatsapp.com',
                key: 'W',
            },
            {
                name: 'Monkeytype',
                link: 'https://monkeytype.com',
                key: 'M',
            },
        ]
    },
    {
        type: 'Programming',
        sites: [
            {
                name: 'GitHub',
                link: 'https://github.com/',
                key: 'G',
            },
            {
                name: 'VsCode',
                link: 'https://vscode.dev/',
                key: 'V',
            },
            {
                name: 'ReplIt',
                link: 'https://replit.com/repls',
                key: 'I',
            },
        ]
    },
    {
        type: 'School',
        sites: [
            {
                name: 'Ingeniería',
                link: 'https://www.ingenieria.unam.mx/',
                key: 'F',
            },
            {
                name: 'SSA',
                link: 'https://www.ssa.ingenieria.unam.mx/magnus/',
                key: 'A',
            },
            {
                name: 'DCB',
                link: 'https://dcb.ingenieria.unam.mx/',
                key: 'C',
            },
            {
                name: 'BIDI',
                link: 'https://bidi.unam.mx',
                key: 'B',
            },
            {
                name: 'Classroom',
                link: 'https://classroom.google.com',
                key: 'T',
            },
            {
                name: 'Educafi',
                link: 'https://educafi02.ingenieria.unam.edu/EducafiUNICA/login/index.php',
                key: 'K',
            },
        ]
    },
    {
        type: 'Tools',
        sites: [
            {
                name: 'Gogle Drive',
                link: 'https://drive.google.com',
                key: 'O',
            },
            {
                name: 'Gogle Photos',
                link: 'https://photos.google.com',
                key: 'E',
            },
            {
                name: 'ILovePDF',
                link: '',
                key: 'P',
            },
            {
                name: 'Canva',
                link: 'https://canva.com',
                key: 'Q',
            },
            {
                name: 'New Doc',
                link: 'https://doc.new',
                key: 'N',
            },
            {
                name: 'New Sheet',
                link: 'https://sheet.new',
                key: 'X',
            },
            {
                name: 'New Slide',
                link: 'https://slide.new',
                key: 'Z',
            },
        ]
    }
];
const keys_array=[];
slist.forEach((type)=>{
    type.sites.forEach((site)=>{
       keys_array.push(site.key); 
    });
});
