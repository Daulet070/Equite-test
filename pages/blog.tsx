import type { NextPage } from 'next';
import { GetStaticPropsResult } from 'next';

interface Props {}

const Blog: NextPage<Props> = ({}) => <div>Blog</div>;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Blog.propTypes = {};

export default Blog;
