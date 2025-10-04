'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import Image from 'next/image';
import { generatePreviewAction, GeneratePreviewState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Bot, ImageIcon, Loader2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Generate Preview
        </>
      )}
    </Button>
  );
}

export function AiPreviewGenerator() {
  const initialState: GeneratePreviewState = {};
  const [state, dispatch] = useFormState(generatePreviewAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Generation Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <div className="mt-16">
      <div className="text-center mb-10">
        <h3 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl">Future Projects, Visualized Today</h3>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Curious about your next big idea? Use our AI-powered tool to generate a stunning visual concept instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>AI Project Preview</CardTitle>
            <CardDescription>Describe your project idea, and our AI will create a preview image for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={dispatch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Project Description</Label>
                <Input
                  id="prompt"
                  name="prompt"
                  placeholder="e.g., A mobile app for eco-friendly travel planning"
                  required
                />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        
        <Card className="h-full flex flex-col items-center justify-center bg-secondary/50 border-dashed">
            {state.previewImageUrl ? (
                <Image
                    src={state.previewImageUrl}
                    alt="AI generated project preview"
                    width={512}
                    height={512}
                    className="rounded-lg object-cover aspect-square shadow-md"
                />
            ) : (
              <div className="text-center text-muted-foreground p-8">
                <ImageIcon className="mx-auto h-12 w-12" />
                <p className="mt-4 font-medium">Your generated image will appear here.</p>
                <p className="text-sm">Enter a prompt and click "Generate Preview" to start.</p>
              </div>
            )}
        </Card>
      </div>
    </div>
  );
}
