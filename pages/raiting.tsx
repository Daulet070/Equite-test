import type { NextPage } from 'next';
import { GetStaticPropsResult } from 'next';

interface Props {}

const Raiting: NextPage<Props> = ({}) => <div>Raiting</div>;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Raiting.propTypes = {};

export default Raiting;
