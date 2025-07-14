import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'WITS University Network Dashboard',
    description: 'A comprehensive dashboard for analysing network traffic inside the WITS university campus, providing real-time insights, traffic patterns, and security alerts for network administrators.',
    image: 'https://placehold.co/1200x630.png',
    imageHint: 'network dashboard',
    tags: ['Next.js', 'React', 'Node.js', 'Recharts', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, secure checkout, and an admin panel for managing inventory, orders, and customers.',
    image: 'https://placehold.co/1200x630.png',
    imageHint: 'ecommerce website',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Freelancer Portfolio Hub',
    description: 'A platform for creative professionals to showcase their work, connect with clients, and manage projects. Includes user profiles, project galleries, and a messaging system.',
    image: 'https://placehold.co/1200x630.png',
    imageHint: 'modern blog',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="aspect-video overflow-hidden rounded-md border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={630}
                    className="h-full w-full object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardDescription className="mt-4">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.repoUrl}>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.liveUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
