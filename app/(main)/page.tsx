import { blog, projects } from '@/.velite';
import HomeContent from './components/home-content';

export default function HomePage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      tags: p.tags,
      status: p.status,
      githubLink: p.githubLink,
      projectUrl: p.projectUrl,
      image: p.image?.src,
    }));

  const recentPosts = blog
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      permalink: p.permalink,
      title: p.title,
      description: p.description,
      tags: p.tags,
      date: p.date,
    }));

  return <HomeContent featuredProjects={featuredProjects} recentPosts={recentPosts} />;
}
