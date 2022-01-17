import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import { ReactNode, useEffect } from "react";

import Seo from "@/components/Seo";
import shortlinks from "@/data/shortlinks";

type LinkParams = {
  param: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(shortlinks).map((param) => ({
    params: {param}
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { param } = params as LinkParams;
  const link = shortlinks[param];
  return { props: {name : param, link} };
};

type PageProp = {
  name: string;
  link: string;
  children?: ReactNode;
};

const Page: NextPage<PageProp> = ({ name, link }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `window.location = "${link}";`;
    document.body.appendChild(script);
  }, [link]);

  return (
    <>
      <Seo templateTitle={`URL Shortener | ${name}`} />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center gap-y-40'>
            <div className='flex flex-col gap-y-4'>
              <h1 className='text-5xl'>Redirecting...</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
