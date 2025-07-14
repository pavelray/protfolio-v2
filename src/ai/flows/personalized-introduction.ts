// src/ai/flows/personalized-introduction.ts
'use server';
/**
 * @fileOverview A personalized introduction AI agent based on the referrer website.
 *
 * - personalizedIntroduction - A function that generates a personalized introduction.
 * - PersonalizedIntroductionInput - The input type for the personalizedIntroduction function.
 * - PersonalizedIntroductionOutput - The return type for the personalizedIntroduction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedIntroductionInputSchema = z.object({
  referrer: z
    .string()
    .describe("The referrer URL of the website visit."),
  linkedInProfileUrl: z
    .string()
    .describe("The LinkedIn profile URL to use for generating the introduction."),
});
export type PersonalizedIntroductionInput = z.infer<typeof PersonalizedIntroductionInputSchema>;

const PersonalizedIntroductionOutputSchema = z.object({
  introduction: z.string().describe("A personalized introduction message."),
});
export type PersonalizedIntroductionOutput = z.infer<typeof PersonalizedIntroductionOutputSchema>;

export async function personalizedIntroduction(input: PersonalizedIntroductionInput): Promise<PersonalizedIntroductionOutput> {
  return personalizedIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedIntroductionPrompt',
  input: {schema: PersonalizedIntroductionInputSchema},
  output: {schema: PersonalizedIntroductionOutputSchema},
  prompt: `You are a personal branding expert. Generate a personalized introduction message for a visitor to a portfolio website.

The visitor is arriving from the following referrer URL: {{{referrer}}}

Here is the portfolio owner's LinkedIn profile URL: {{{linkedInProfileUrl}}}

If the visitor is coming from LinkedIn, highlight any shared connections and interests based on the LinkedIn profile. Otherwise, provide a general introduction highlighting the portfolio owner's expertise and experience.

Introduction:`,
});

const personalizedIntroductionFlow = ai.defineFlow(
  {
    name: 'personalizedIntroductionFlow',
    inputSchema: PersonalizedIntroductionInputSchema,
    outputSchema: PersonalizedIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
