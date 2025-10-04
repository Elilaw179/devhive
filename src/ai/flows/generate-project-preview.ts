'use server';

/**
 * @fileOverview Uses a generative AI tool to create engaging previews from a text prompt for upcoming projects.
 *
 * - generateProjectPreview - A function that handles the project preview generation process.
 * - GenerateProjectPreviewInput - The input type for the generateProjectPreview function.
 * - GenerateProjectPreviewOutput - The return type for the generateProjectPreview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectPreviewInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the project preview to generate.'),
});
export type GenerateProjectPreviewInput = z.infer<typeof GenerateProjectPreviewInputSchema>;

const GenerateProjectPreviewOutputSchema = z.object({
  previewImageUrl: z.string().describe('The URL of the generated project preview image.'),
});
export type GenerateProjectPreviewOutput = z.infer<typeof GenerateProjectPreviewOutputSchema>;

export async function generateProjectPreview(input: GenerateProjectPreviewInput): Promise<GenerateProjectPreviewOutput> {
  return generateProjectPreviewFlow(input);
}

const generateProjectPreviewPrompt = ai.definePrompt({
  name: 'generateProjectPreviewPrompt',
  input: {schema: GenerateProjectPreviewInputSchema},
  output: {schema: GenerateProjectPreviewOutputSchema},
  prompt: `You are a marketing assistant helping generate preview images for projects.

  Generate a project preview image based on the following description: {{{prompt}}}.`,
});

const generateProjectPreviewFlow = ai.defineFlow(
  {
    name: 'generateProjectPreviewFlow',
    inputSchema: GenerateProjectPreviewInputSchema,
    outputSchema: GenerateProjectPreviewOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.prompt,
    });

    return {
      previewImageUrl: media.url,
    };
  }
);
