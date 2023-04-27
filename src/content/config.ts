import { z, defineCollection } from "astro:content";

export const collections = {
	// Articles are the content within issues.
	// They are in subfolders depending on their issue (e.g. /content/articles/2023-04/article-from-april-2023.md)
	articles: defineCollection({
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				// This corresponds to the name of the author
				author: z.string(),
				coverImage: image().optional()
			})
	}),
	// Authors are the people who write articles.
	authors: defineCollection({
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				bio: z.string(),
				avatar: image(),
				// A link to a personal website or social media profile
				link: z.string().url()
			})
	}),
	// Issues are the monthly issues of the magazine.
	issues: defineCollection({
		schema: z.object({
			date: z.string()
		})
	})
};
