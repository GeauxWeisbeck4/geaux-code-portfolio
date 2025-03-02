/**
 * This configures the translations for all ui text in your website.
 *
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated
 */
import type { SupportedLanguage } from "../utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Andrew Weisbeck Portfolio Site"
        },
        "site.description": {
            text: "A full-stack developer portfolio and blog website for Andrew Weisbeck, built with Astro."
        },
        "profile.description": {
            text: "Andrew Weisbeck is a Full-Stack Developer and Software Engineer in Raleigh and Durham, North Carolina."
        },
        "blog.lastUpdated": {
            text: "Last Updated:03.02.2025"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "es": {
        "site.title": {
            text: "Astro Theme Cody"
        },
        "site.description": {
            text: "Un tema de blog minimalista creado con Astro. Un tema de inicio rápido y sencillo para cualquiera que quiera crear su propio blog."
        },
        "profile.description": {
            text: "tu descripción biográfica"
        },
        "blog.lastUpdated": {
            text: "Última actualización: 03.02.2025"
        },
        "sidebar.tableOfContents": {
            text: "Tabla de contenidos"
        },
        "project.platform": {
            text: "PLATAFORMA"
        },
        "project.stack": {
            text: "PILA"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };
