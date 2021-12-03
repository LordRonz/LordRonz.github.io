import {
  Box, Grid, Typography, Zoom,
} from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

const NotFoundPage = (): JSX.Element => (
  <>
    <Helmet>
      <title>Page not found | LordRonz</title>
    </Helmet>
    <main className="text-lrtext-white bg-gray-900 body-font">
      <Grid container className="flex-grow h-screen items-center text-center bg-mblack justify-center" id="home">
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Zoom in style={{ transitionDelay: '200ms' }}>
              <Grid>
                <Typography variant="h1" component="h1" className="text-lrred">
                  <Box fontWeight="fontWeightBold">404</Box>
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className="text-lrrwhite"
                >
                  <Typist startDelay={300} avgTypingDelay={80}>
                    Page Not Found
                  </Typist>
                </Typography>
              </Grid>
            </Zoom>
          </Grid>
        </Grid>
        <Grid item justifyContent="center">
          <Typography variant="h6" component="h3" className="text-lrred">
            <Box fontWeight="fontWeightBold">
              <Link to="/">
                <span className="animated-underline link">Back to Home</span>
              </Link>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </main>
  </>
);

export default NotFoundPage;
