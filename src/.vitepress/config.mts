import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "Name LastName",
    description: "Site description or title description",
    sitemap: {
        // REPLACE this with your hosted URL for sitemap to work!
        hostname: 'https://yourhosteddomain.com',
    },
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Projects', link: '/projects/index.md' },
            { text: 'Publications', link: '/publications/index.md' },
            { text: 'Resume', link: '/resume.md' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/iann838/vitefolio' }
        ],
        search: {
            provider: 'local'
        },

        // https://github.com/iann838/vitefolio
        sidebar: [{ text: '' }], // DO NOT DELETE force an empty sidebar
        profile: {
            title: '', // hidden if empty
            bio: "Short biography for the left-hand sidebar",
            avatar: 'https://www.github.com/iann838.png',
            links: [
                { icon: 'github', link: 'https://github.com/iann838' },
                { icon: 'x', link: 'https://x.com/iann838' },
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img">
                                <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                            </svg>
                        `
                    },
                    link: 'https://scholar.google.com/citations',
                    text: 'alt-text'
                }
            ]
        },

    },
})
