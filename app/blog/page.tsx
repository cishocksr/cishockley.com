import { blog } from '@/.velite';
import BlogList from './components/blog-list';

export default function BlogPage() {
  const posts = blog
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='container-section max-w-3xl py-12'>
      <div className='mb-12'>
        <h1 className='mb-4 text-4xl font-bold'>Blog</h1>
        <p className='text-muted-foreground text-lg'>
          Thoughts, tutorials, and updates
        </p>
      </div>
      <BlogList posts={posts} />
    </div>
  );
}
