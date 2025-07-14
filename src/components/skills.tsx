import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, GitBranch } from 'lucide-react';
import { ReactIcon, NextjsIcon, NodejsIcon, TailwindCssIcon, PrismaIcon, DockerIcon, JavascriptIcon, TypescriptIcon } from '@/components/tech-icons';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'React', icon: <ReactIcon className="h-8 w-8" /> },
      { name: 'Next.js', icon: <NextjsIcon className="h-8 w-8" /> },
      { name: 'JavaScript', icon: <JavascriptIcon className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <TypescriptIcon className="h-8 w-8" /> },
      { name: 'Tailwind CSS', icon: <TailwindCssIcon className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', icon: <NodejsIcon className="h-8 w-8" /> },
      { name: 'Prisma', icon: <PrismaIcon className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'PostgreSQL', icon: <Database className="h-8 w-8 text-blue-500" /> },
      { name: 'MongoDB', icon: <Database className="h-8 w-8 text-green-500" /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: 'Docker', icon: <DockerIcon className="h-8 w-8" /> },
      { name: 'Git', icon: <GitBranch className="h-8 w-8 text-orange-600" /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I work with a modern tech stack, always eager to learn and adapt to new technologies to build the best possible products.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-4">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
