// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// export const SITE_TITLE = 'Andrew Weisbeck Portfolio Website | Full-Stack Developer';
// export const SITE_DESCRIPTION = 'Andrew Weisbeck Full-Stack Developer Portfolio and Resume Website';
import type nav from "./i18n/nav";
import ui from "./i18n/ui";
import type { SupportedLanguage } from "./utils/i18n";

type Config = {
    title: string;
    description: string;
    lang: string;
    profile: {
        author: string;
        description?: string;
    },
    settings: {
        paginationSize: number,
    },
}

type SocialLink = {
    icon: string;
    friendlyName: string;
    link: string;
}

export const SUPPORTED_LANGUAGES = {
    'en': 'en',
    'es': 'es'
};

export const DEFAULT_LANG = SUPPORTED_LANGUAGES.en as SupportedLanguage;

export const siteConfig: Config = {
    title: ui[DEFAULT_LANG]["site.title"].text,
    description: ui[DEFAULT_LANG]["profile.description"].text,
    lang: DEFAULT_LANG,
    profile: {
        author: "Andrew Weisbeck",
        description: ui[DEFAULT_LANG]["profile.description"].text,
    },
    settings: {
        paginationSize: 10
    }
}

/**
  These are you social media links.
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const SOCIAL_LINKS: Array<SocialLink> = [
    {
        icon: "mdi:github",
        friendlyName: "Github",
        link: "https://github.com/geauxweisbeck4",
    },
    {
        icon: "mdi:linkedin",
        friendlyName: "LinkedIn",
        link: "https://linkedin.com/in/geauxweisbeck4",
    },
    {
        icon: "mdi:email",
        friendlyName: "email",
        link: "mailto:andrew.weisbeck@gmail.com",
    },
    {
        icon: "mdi:rss",
        friendlyName: "rss",
        link: "./rss.xml"
    }
];

// NOTE: These must match the entries in `src/i18n/nav.ts
export const NAV_LINKS: Array<keyof typeof nav[SupportedLanguage]> = [
    "home", "about", "blog", "projects", "archive"
]



