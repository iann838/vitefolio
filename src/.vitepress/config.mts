import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "Name LastName",
    description: "Site description or title description",
    sitemap: {
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
                { icon: 'twitter', link: 'https://twitter.com/youruser' },
                // or { icon: { svg: '<svg>...</svg>' }, link: '...' }
            ]
        },

    },
})
