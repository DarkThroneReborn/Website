import blogAuthors, { BlogAuthor } from './authors';
import categories, { Category } from './categories';

export type BlogPost = {
  slug: string;
  title: string;
  author: BlogAuthor;
  category: Category;
  date: Date;
  abstract: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'moppler',
    title: 'Moppler',
    author: blogAuthors['moppler'],
    category: categories['development'],
    date: new Date('2021-08-01'),
    abstract: 'Moppler is a project that aims to make it easier to create and maintain a website for your Minecraft server. It is a static site generator that uses a simple configuration file to generate a website that is easy to customize and deploy.',
    content: ``,
  }
];

export default blogPosts;