
export const projectService = {
    loadProjects,
    getSkills
}

function loadProjects() {
    const projects = [
        {
            id:'r00',
            name: 'AirYNY',
            gitHubLink: 'https://protected-reaches-97996.herokuapp.com/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659441206/Protfolio/AirYNY_kbs39n.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'Vuex', 'Node.js', 'MongoDB', 'Rest API', 'Socket.io', 'SCSS', 'JavaScript(ES6)']
        },
        {
            id:'r01',
            name: 'Bitcoin Dashboard',
            gitHubLink: 'https://yoniere.github.io/Mister-Bitcoin-Angular/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659440455/Protfolio/BitcoinDashboard_icwbsb.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Angular', 'TypeScript', 'SCSS', 'JavaScript(ES6)']
        },
        {
            id:'r02',
            name: 'Email',
            gitHubLink: 'https://yoniere.github.io/Email/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659440804/Protfolio/Email_q8rki0.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'Vuex', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r03',
            name: 'Book Store',
            gitHubLink: 'https://yoniere.github.io/VueJS-Miss-Book/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659440330/Protfolio/BookStore_ltkuj0.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r04',
            name: 'Meme Generator',
            gitHubLink: 'https://yoniere.github.io/Meme-Generator/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659440214/Protfolio/MemeGenerator_wcbbno.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Canvas', 'HTML5', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r05',
            name: 'Mine Sweeper',
            gitHubLink: 'https://yoniere.github.io/Mine-Sweeper-/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659439524/Protfolio/MineSweeper_kbxvg2.jpg',
            tech: ['JavaScript(ES6)', 'HTML5', 'CSS3']
        },
    ]
    return projects
}

function getSkills() {
    return [
        {
            id:'00',
            name:'Single-Page-Application',
        },
        {
            id:'01',
            name:'Vue.js(V3)',
        },
        {
            id:'02',
            name:'Vuex',
        },
        {
            id:'03',
            name:'React.js',
        },
        {
            id:'04',
            name:'Redux',
        },
        {
            id:'05',
            name:'Angular',
        },
        {
            id:'06',
            name:'Typescript',
        },
        {
            id:'08',
            name:'Node.js',
        },
        {
            id:'09',
            name:'Rest API',
        },
        {
            id:'10',
            name:'MongoDB',
        },
        {
            id:'11',
            name:'MySQL',
        }
        ]
}