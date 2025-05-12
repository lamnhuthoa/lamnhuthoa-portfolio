
interface INavigation {
    home: string,
    projects: {
        [key: string]: {
            name: string,
            path: string,
            imgDir: string,
        },
    },
}

export const NAVIGATION: INavigation = {
    home: "/",
    projects: {
        ['video-summary-chatbot']: {
            name: "Video Summary Chatbot",
            path: "/pages/projects/video-summary-chatbot",
            imgDir: "/images/projects/video-summary-chatbot/",
        },
        ['simon-game']: {
            name: "Simon Game",
            path: "/pages/projects/simon-game",
            imgDir: "/images/projects/simon-game/",
        },
        ['virtual-office']: {
            name: "Virtual Office",
            path: "/pages/projects/virtual-office",
            imgDir: "/images/projects/virtual-office/",
        },
    },
}