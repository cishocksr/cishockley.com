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
  description?: string;
  tags?: string[];
  status: 'planning' | 'in-progress' | 'completed';
  githubLink?: string;
  projectUrl?: string;
  image?: string;
  slug: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0">
      {/* Fixed aspect-ratio image area at the top */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {props.image ? (
          <Image
            src={props.image}
            alt={props.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            role="img"
            aria-label="No image available"
          >
            <span className="text-sm text-zinc-400 dark:text-zinc-500">
              No Image
            </span>
          </div>
        )}
      </div>

      <CardHeader className="pt-4">
        <CardTitle>{props.title}</CardTitle>
        {props.description && (
          <CardDescription className="line-clamp-2">
            {props.description}
          </CardDescription>
        )}
        <CardAction>{getStatusBadge(props.status)}</CardAction>
      </CardHeader>

      <CardContent className="flex-1">
        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

      <CardFooter className="flex items-center justify-between pb-4">
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
