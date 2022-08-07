
export const projectService = {
    loadProjects,
    getSkills
}

function loadProjects() {
    const projects = [
        {
            id:'r00',
            name: 'AirYNY',
            details: 'Marketplace for landlords and accommodation seekers, inspired by Airbnb.com',
            gitHubLink: 'https://protected-reaches-97996.herokuapp.com/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/AirYNY_idquxs.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'Vuex', 'Node.js', 'MongoDB', 'Rest API', 'Socket.io', 'SCSS', 'JavaScript(ES6)']
        },
        {
            id:'r01',
            name: 'Bitcoin Dashboard',
            details: 'Get updated with current Bitcoin currency and more statistic date',
            gitHubLink: 'https://yoniere.github.io/Mister-Bitcoin-Angular/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/BitcoinDashboard_xm26y8.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Angular', 'TypeScript', 'SCSS', 'JavaScript(ES6)','Axios']
        },
        {
            id:'r02',
            name: 'Email',
            details: 'Emaill app based on Gmail design',
            gitHubLink: 'https://yoniere.github.io/Email/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/Email_xted35.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'Vuex', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r03',
            name: 'Book Store',
            details: 'Book store with full CRUDL',
            gitHubLink: 'https://yoniere.github.io/VueJS-Miss-Book/#/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/BookStore_b6bnvi.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Vue.js(V3)', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r04',
            name: 'Meme Generator',
            details: 'Get your own Meme',
            gitHubLink: 'https://yoniere.github.io/Meme-Generator/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/MemeGenerator_dj14yv.jpg',
            tech: ['MVC', 'Single-Page-Application', 'Canvas', 'HTML5', 'CSS3', 'JavaScript(ES6)']
        },
        {
            id:'r05',
            name: 'Mine Sweeper',
            details: 'The ultimate Minesweeper',
            gitHubLink: 'https://yoniere.github.io/Mine-Sweeper-/',
            imgLink: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1659867859/Protfolio/MineSweeper_hvm5pr.jpg',
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