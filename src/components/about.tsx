import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: '12+ Years of Experience',
    description: 'Developing high-quality, scalable, and maintainable web applications for a diverse range of clients.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Freelance Specialist',
    description: 'Partnering with businesses to bring their ideas to life, from initial concept to final deployment.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Client-Focused',
    description: 'Dedicated to understanding client needs and delivering solutions that drive growth and success.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A Passionate Developer Crafting Digital Experiences
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm a seasoned Full Stack Developer with over a decade of experience building robust and elegant web solutions. As a freelancer, I thrive on turning complex problems into simple, beautiful, and intuitive designs that exceed client expectations.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
