import { ReactTypical } from '@deadcoder0904/react-typical';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Zoom } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-scroll';

import MeButton from '@/components/buttons/MeButton';
import ButtonLink from '@/components/links/ButtonLink';

const meTitles = ['Undergraduate Student', 'Wee', 'Web Developer', 'Backend Engineer', 'Python Enthusiast'] as const;

let typoTheme = createTheme();
typoTheme = responsiveFontSizes(typoTheme);

const Home = (): JSX.Element => {
  const MeTypist = (
    <ReactTypical
      steps={meTitles.reduce((acc: (string | number)[], title) => {
        return acc.concat([title, 690]);
      }, [])}
      wrapper='p'
      loop={Infinity}
      className='typicalWrapper'
    />
  );

  return (
    <section id='home' className='text-primary-50'>
      <div className='w-full mx-auto h-screen flex py-20 px-9 flex-col md:flex-row items-center'>
        <Zoom in style={{ transitionDelay: '200ms' }}>
          <div className='lg:flex-grow lg:pr-24 md:w-1/2 md:pr-16 md:items-start md:text-left flex flex-col mb-16 md:mb-0 items-center text-center z-10'>
            <ThemeProvider theme={typoTheme}>
              <Typography variant='h3' component='h2'>
                <Box fontWeight='fontWeightBold'>
                  Hi, I&apos;m <span className='text-primary-300'>Aaron</span>.
                </Box>
              </Typography>
              <Typography variant='h6' component='h3' className='w-full'>
                {MeTypist}
              </Typography>
            </ThemeProvider>
            <div className='flex flex-auto mt-[5%]'>
              <ButtonLink href='cv.pdf' openNewTab={true} className='uppercase'>
                See My CV
              </ButtonLink>
              <ButtonLink
                variant='outline'
                href='https://lordronz.github.io/blog/'
                openNewTab={true}
                className='ml-4 uppercase'
              >
                Blog
              </ButtonLink>
            </div>
          </div>
        </Zoom>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center'>
          <figure className='w-36 md:w-52 z-10'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/images/steph.jpg'
              width={300}
              height={465}
            />
          </figure>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 text-3xl transform -translate-y-1/2 -translate-x-1/2'>
        <Link to='about' smooth spy hashSpy href='#about' aria-label='LESGO'>
          <MeButton>
            <span>
              <Typography>
                <Box fontWeight='fontWeightBold'>
                  <ExpandMoreIcon className='mx-[5px]'/>
                  LESGO
                </Box>
              </Typography>
            </span>
          </MeButton>
        </Link>
      </div>
    </section>
  );
};

export default Home;
