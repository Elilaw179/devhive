'use server';

import { z } from 'zod';
import { generateProjectPreview } from '@/ai/flows/generate-project-preview';

const schema = z.object({
  prompt: z.string().min(1, { message: 'Prompt is required' }),
});

export interface GeneratePreviewState {
  error?: string;
  previewImageUrl?: string;
}

export async function generatePreviewAction(
  prevState: GeneratePreviewState,
  formData: FormData
): Promise<GeneratePreviewState> {
  const validatedFields = schema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.prompt?.[0] || 'Invalid prompt.',
    };
  }
  
  try {
    const result = await generateProjectPreview({ prompt: validatedFields.data.prompt });
    if (result.previewImageUrl) {
      return { previewImageUrl: result.previewImageUrl };
    }
    return { error: 'Failed to generate preview. Please try again.' };
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
