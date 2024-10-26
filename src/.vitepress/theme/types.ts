import { DefaultTheme } from "vitepress"

export interface Profile {
    title?: string
    bio: string
    avatar: string
    links: {
        icon: DefaultTheme.SocialLinkIcon,
        link: string
    }[]
}

export interface ThemeConfig extends DefaultTheme.Config {
    profile: Profile
    sidebar: [{ text: '' }]
}
