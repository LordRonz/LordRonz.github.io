import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import Contact from '@/components/Contact';

const Footer = (): JSX.Element => (
  <Grid container className='flex-grow py-4 text-primary-50 border-t border-primary-300' spacing={0} gap={2}>
    <Grid item xs={12}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Typography variant='subtitle1' component='span'>
            <Box textAlign='center' fontWeight={600}>
              Reach me out
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Contact />
    <Grid item xs={12}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Typography component='span'>
            <Box textAlign='center' fontWeight='light' fontSize={14}>
              © Aaron Christopher {new Date().getFullYear()}
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Footer;
