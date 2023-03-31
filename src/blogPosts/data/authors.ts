export type BlogAuthor = {
  displayName: string;
  role: string;
  avatar: string;
  link: string;
};

const blogAuthors: { [k: string]: BlogAuthor } = {
  'moppler': {
    displayName: 'Moppler',
    role: 'Project Lead',
    avatar: 'https://avatars.githubusercontent.com/u/48440667?v=4',
    link: ''
  }
};

export default blogAuthors;