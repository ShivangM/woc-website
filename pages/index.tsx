import About from '@/components/About';
import CommunityPatners from '@/components/CommunityPatners';
import FAQ from '@/components/FAQ';
import HomeHero from '@/components/HomeHero';
import Organizations from '@/components/Organizations';
import Patners from '@/components/Patners';
import Project from '@/components/Project';
import Timeline from '@/components/Timeline';
import Head from 'next/head';
import Image from 'next/image';

export default function Home({ date }: { date: Date }) {
  return (
    <>
      <Head>
        <title>Home | Winter Of Code 3.0</title>
        <meta name="description" content="Homepage for winter of code 3.0" />
        <meta
          name="keywords"
          content="winter of code, woc, woc3, open source"
        />
        <meta name="author" content="GDSC IIIT Kalyani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Image
          src="/assets/background/bgMobile.jpg"
          alt="Home Background"
          width={1280}
          height={6840}
          className="absolute -z-10 sm:hidden"
        />

        <HomeHero />
        <About />
        <Timeline date={date} />
        <Organizations />
        <Project />
        <Patners />
        <CommunityPatners />
        <FAQ />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const date = new Date();

  return {
    props: {
      date: JSON.parse(JSON.stringify(date)),
    }, // will be passed to the page component as props
  };
}
