/* eslint-disable @next/next/no-page-custom-font */
import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Section from '../components/Section';

interface Props {}

const Home = ({ first, second }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
      />
    </Head>
    <Section {...first} />
    <Section {...second} />
  </>
);
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      first: {
        id: 'firstScreen',
        title: 'Иструмент мониторинга для трейдера, которому доверяют',
        subtitle:
          'Создайте портфолио со своими фактическими успехами — повысьте доверие у заинтересованных людей.',
        elem: true,
        row: 'row',
      },
      second: {
        id: 'secondScreen',
        title: 'Проверенные результаты',
        subtitle:
          'Объективные и сухие цифры подойдут не только для мониторинга своих результатов, но и для того, чтобы вызвать доверие у инвесторов или своей публики.',
        elem: false,
        row: 'row-reverse',
      },
    },
  };
}

export default Home;
