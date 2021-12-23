import { ReactTypical } from '@deadcoder0904/react-typical';
import { Box, Grid, Typography, Zoom } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';

import Seo from '@/components/Seo';

const PageNotFound: NextPage = () => {
  return (
    <div className='text-lrtext-white bg-gray-900 body-font'>
      <Seo templateTitle='Page not found | LordRonz' />
      <Grid container className='flex-grow h-screen items-center text-center justify-center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Zoom in style={{ transitionDelay: '200ms' }}>
              <Grid>
                <Typography variant='h1' component='h1' className='text-lrred'>
                  <Box fontWeight='fontWeightBold'>404</Box>
                </Typography>
                <Typography variant='h5' component='h2' className='text-lrrwhite'>
                  <ReactTypical steps={['Page Not Found']} wrapper='p' className='typicalWrapper' />
                </Typography>
              </Grid>
            </Zoom>
          </Grid>
        </Grid>
        <Grid item justifyContent='center'>
          <Typography variant='h6' component='h3' className='text-lrred'>
            <Box fontWeight='fontWeightBold'>
              <Link href='/'>
                <a>
                  <span className='animated-underline link cursor-pointer pb-0.5'>Back to Home</span>
                </a>
              </Link>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNotFound;
