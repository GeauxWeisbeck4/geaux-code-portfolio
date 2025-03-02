import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

function removeDupsAndLowercase(list: string[]) {
	if (!list.length) return list;
	const lowercaseItems = list.map((str) => str.toLowerCase());
	const uniqueItems = new Set(lowercaseItems);
	return Array.from(lowercaseItems);
}

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.string().or(z.date()).transform(val => new Date(val)),
		updatedDate: z.string().or(z.date()).transform(val => val ? new Date(val) : undefined).optional(),
		heroImage: z.object({
			src: z.string(),
			alt: z.string().optional(),
		}),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowercase).optional(),
		series: z.string().optional(),
		draft: z.boolean().optional().default(false),
		// For pinning posts
		order: z.number().min(1).max(5).optional(),
		// Hide post from pagination
		hide: z.boolean().optional().default(false),
		slug: z.string().optional()
	}),
});

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.string().or(z.date()).transform(val => new Date(val)),
		updatedDate: z.string().or(z.date()).transform(val => val ? new Date(val) : undefined).optional(),
		heroImage: z.object({
			url: z.string(),
			alt: z.string().optional()
		}),
		ogImage: z.string().optional(),
		stack: z.array(z.string()).default([]).transform(removeDupsAndLowercase),
		platform: z.string().optional(),
		website: z.string().optional(),
		github: z.string().optional(),
		draft: z.boolean().optional().default(false),
		// For pinning projects
		order: z.number().min(1).max(5).optional(),
		slug: z.string().optional()
	}),
});

// const resources = defineCollection({
// 	// Load data from API response
// })

export const collections = { blog, projects };
