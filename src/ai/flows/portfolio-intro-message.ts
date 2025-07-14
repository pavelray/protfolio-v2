// src/ai/flows/portfolio-intro-message.ts
'use server';

/**
 * @fileOverview Generates personalized introductory messages for Pavel Ray's portfolio website visitors.
 *
 * This file defines a Genkit flow that suggests introductory messages tailored to the context of how the visitor accessed the webpage.
 * Specifically, it caters to visitors referred from other portfolio websites by emphasizing Pavel's design and creative skills.
 *
 * - `portfolioIntroMessage`: A function to generate personalized introductory messages.
 * - `PortfolioIntroMessageInput`: The input type for the `portfolioIntroMessage` function (currently empty).
 * - `PortfolioIntroMessageOutput`: The return type for the `portfolioIntroMessage` function, containing the generated message.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioIntroMessageInputSchema = z.object({
  referrer: z
    .string()
    .optional()
    .describe(
      'The URL of the referring website, if available.  This helps tailor the intro message to the visitor\'s context.'
    ),
});
export type PortfolioIntroMessageInput = z.infer<typeof PortfolioIntroMessageInputSchema>;

const PortfolioIntroMessageOutputSchema = z.object({
  message: z.string().describe('A personalized introductory message.'),
});
export type PortfolioIntroMessageOutput = z.infer<typeof PortfolioIntroMessageOutputSchema>;

export async function portfolioIntroMessage(
  input: PortfolioIntroMessageInput
): Promise<PortfolioIntroMessageOutput> {
  return portfolioIntroMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioIntroMessagePrompt',
  input: {schema: PortfolioIntroMessageInputSchema},
  output: {schema: PortfolioIntroMessageOutputSchema},
  prompt: `You are Pavel Ray's portfolio website. Generate a personalized introductory message for a visitor based on how they arrived at the website.

  If the visitor is referred from another portfolio website (as indicated by the referrer URL being a portfolio site), focus on Pavel's design and creative skills.  Highlight his ability to bring innovative and visually appealing solutions to web development projects.

  If no referrer is available, provide a general introduction highlighting Pavel's full-stack experience and expertise.

  Here's the referrer, if available: {{{referrer}}}

  Introductory Message:`,
});

const portfolioIntroMessageFlow = ai.defineFlow(
  {
    name: 'portfolioIntroMessageFlow',
    inputSchema: PortfolioIntroMessageInputSchema,
    outputSchema: PortfolioIntroMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
