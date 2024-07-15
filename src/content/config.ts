import { defineCollection, z } from "astro:content";

const points = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().refine((val) => val.startsWith("icon")),
  }),
});

export const collections = {
  points,
};
