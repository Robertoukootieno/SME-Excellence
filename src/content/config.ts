import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'data',
  schema: z.object({
    home: z.object({
      heroTitle: z.string(),
      heroSlogan: z.string(),
      heroValuePropositions: z.array(z.string()),
      aboutHeading: z.string(),
      aboutParagraph1: z.string(),
      aboutParagraph2: z.string(),
      principles: z.array(
        z.object({
          title: z.string(),
          tagline: z.string(),
          description: z.string(),
          icon: z.string()
        })
      ),
      finalCtaTitle: z.string(),
      finalCtaText: z.string()
    }),
    about: z.object({
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      storyHeading: z.string(),
      storyParagraph1: z.string(),
      storyParagraph2: z.string(),
      features: z.array(z.string()),
      missionText: z.string(),
      visionText: z.string(),
      finalCtaTitle: z.string(),
      finalCtaText: z.string()
    }),
    services: z.object({
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      mainServices: z.array(
        z.object({
          title: z.string(),
          tagline: z.string(),
          description: z.string(),
          features: z.array(z.string())
        })
      ),
      processSteps: z.array(
        z.object({
          title: z.string(),
          description: z.string()
        })
      ),
      additionalServices: z.array(
        z.object({
          title: z.string(),
          description: z.string()
        })
      ),
      finalCtaTitle: z.string(),
      finalCtaText: z.string()
    }),
    contact: z.object({
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      infoText: z.string(),
      addressLine1: z.string(),
      addressLine2: z.string(),
      cvr: z.string(),
      rfpTitle: z.string(),
      rfpText: z.string(),
      rfpButtonText: z.string(),
      serviceOptions: z.array(z.string())
    })
  })
});

export const collections = {
  site
};