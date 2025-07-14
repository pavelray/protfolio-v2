'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalizedIntroduction } from '@/ai/flows/personalized-introduction';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Linkedin, Github, ArrowRight } from 'lucide-react';

export function Hero() {
  const [intro, setIntro] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const linkedInProfileUrl = 'https://www.linkedin.com/in/pavelray/';
  const githubProfileUrl = 'https://github.com/pavelray';

  useEffect(() => {
    async function getIntro() {
      try {
        const result = await personalizedIntroduction({
          referrer: document.referrer || 'direct',
          linkedInProfileUrl: linkedInProfileUrl,
        });
        setIntro(result.introduction);
      } catch (error) {
        console.error('Failed to get personalized introduction:', error);
        setIntro(
          "Welcome to my digital space. I'm a Full Stack Developer with over 12 years of experience in creating dynamic and user-centric web applications."
        );
      } finally {
        setIsLoading(false);
      }
    }
    getIntro();
  }, []);

  return (
    <section id="hero" className="bg-background">
      <div className="container grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-start">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Pavel Ray
          </h1>
          <p className="mt-2 text-xl text-primary md:text-2xl">
            Full Stack Developer
          </p>
          <div className="mt-6 h-24">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-base text-muted-foreground md:text-lg">{intro}</p>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
           <Image
            src="https://placehold.co/500x500.png"
            alt="Pavel Ray's portrait"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
            data-ai-hint="developer portrait"
          />
        </div>
      </div>
    </section>
  );
}
