import type { NextPage } from 'next';
import { useEffect } from 'react';

import Seo from '@/components/Seo';

const Ctf: NextPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const link =
      'https://gist.github.com/LordRonz/23680d49bbaea7a02c8f4f7a91a50772';
    script.async = true;
    script.innerHTML = `window.location = "${link}";`;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Seo templateTitle='URL Shortener' />
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

export default Ctf;
