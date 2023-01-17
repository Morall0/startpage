// On this file you can put the sites that you want to pin on the startpage.
// You can create the objects you want in slist array with the properties type and sites, and each one will be a category column.
// Similarly, in the sites array property you can add the sites you want with their name, link and keyboard shortcut.

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
                name: 'WhatsApp',
                link: 'https://web.whatsapp.com',
                key: 'W',
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
        type: 'Google',
        sites: [
            {
                name: 'Gogle Drive',
                link: 'https://drive.google.com',
                key: 'O',
            },
            {
                name: 'Photos',
                link: 'https://photos.google.com',
                key: 'O',
            },
            {
                name: 'New Doc',
                link: 'https://doc.new',
                key: 'N',
            },
            {
                name: 'New Sheet',
                link: 'https://sheet.new',
                key: 'H',
            },
            {
                name: 'New Slide',
                link: 'https://slide.new',
                key: 'S',
            },
        ]
    }
];
