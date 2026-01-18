import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getStatusBadge } from '@/lib/project-utils';

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  status: 'planning' | 'in-progress' | 'completed';
  githubLink?: string;
  projectUrl?: string;
  image?: string;
  slug: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardAction>{getStatusBadge(props.status)}</CardAction>
      </CardHeader>
      <CardContent>
        {/* Image container */}
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg">
          {props.image ? (
            <Image
              src={props.image}
              alt={props.title}
              width={400}
              height={225}
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700"
              role="img"
              aria-label="No image available"
            >
              <span className="text-gray-500 dark:text-gray-400">No Image</span>
            </div>
          )}
        </div>
        {props.tags && props.tags.length > 0 && (
          <div className="flex gap-2">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex gap-3">
          {props.githubLink && (
            <Button variant="outline" size="icon-sm" asChild>
              <Link href={props.githubLink} target="_blank">
                <FiGithub />
              </Link>
            </Button>
          )}
          {props.projectUrl && (
            <Button variant="outline" size="icon-sm" asChild>
              <Link href={props.projectUrl} target="_blank">
                <FiExternalLink />
              </Link>
            </Button>
          )}
        </div>

        <Button variant="outline" size="icon-sm" asChild>
          <Link href={`/projects/${props.slug}`}>
            <FiArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
