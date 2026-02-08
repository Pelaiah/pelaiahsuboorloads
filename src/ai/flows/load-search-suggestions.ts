'use server';

/**
 * @fileOverview Generates load search suggestions based on current criteria and past preferences.
 *
 * - generateLoadSearchSuggestions - A function that generates load search suggestions.
 * - LoadSearchSuggestionsInput - The input type for the generateLoadSearchSuggestions function.
 * - LoadSearchSuggestionsOutput - The return type for the generateLoadSearchSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LoadSearchSuggestionsInputSchema = z.object({
  currentSearchCriteria: z
    .string()
    .describe('The current search criteria entered by the driver.'),
  pastPreferences: z
    .string()
    .describe('The past load preferences of the driver.'),
});
export type LoadSearchSuggestionsInput = z.infer<typeof LoadSearchSuggestionsInputSchema>;

const LoadSearchSuggestionsOutputSchema = z.object({
  suggestedFilters: z
    .string()
    .describe('Suggested load filters based on the input criteria and preferences.'),
});
export type LoadSearchSuggestionsOutput = z.infer<typeof LoadSearchSuggestionsOutputSchema>;

export async function generateLoadSearchSuggestions(
  input: LoadSearchSuggestionsInput
): Promise<LoadSearchSuggestionsOutput> {
  return generateLoadSearchSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'loadSearchSuggestionsPrompt',
  input: {schema: LoadSearchSuggestionsInputSchema},
  output: {schema: LoadSearchSuggestionsOutputSchema},
  prompt: `You are an AI assistant helping a truck driver find relevant loads.

The driver is currently searching for loads with the following criteria: {{{currentSearchCriteria}}}.

Based on the driver's past preferences: {{{pastPreferences}}},
suggest additional filters that would help the driver find the most suitable loads.

Return only suggested filters.`,
});

const generateLoadSearchSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateLoadSearchSuggestionsFlow',
    inputSchema: LoadSearchSuggestionsInputSchema,
    outputSchema: LoadSearchSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
