import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const timeline = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/timeline" }),
	schema: z.object({
		when: z.string(),
		datetime: z.string().optional(),
		title: z.string(),
		href: z.string().optional(),
		sound: z.string().optional(),
	}),
});

export const collections = { timeline };
