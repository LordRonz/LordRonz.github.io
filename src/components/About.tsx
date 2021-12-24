import { Box, Chip, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

import Container from '@/components/layout/Container';

const MeChip = ({ label }: { label: string }) => (
  <Chip
    label={label}
    sx={{
      margin: '0.5rem 0.5rem',
      color: '#ee6969',
      fontWeight: 700,
      textTransform: 'uppercase',
      '&:hover': {
        backgroundColor: '#444',
      },
    }}
  />
);

const About = (): JSX.Element => {
  const techList = [
    'C/C++',
    'Python',
    'PHP',
    'Javascript',
    'Typescript',
    'SQL',
    'MongoDB',
    'Django',
    'Go',
    'HTML',
    'CSS',
    'Node.js',
    'React.js',
    'Nginx',
    'Docker',
    'OpenCV',
    'Linux',
    'Git',
  ] as const;

  const conceptList = [
    'Data Structure',
    'Object Oriented Programming',
    'Design Pattern',
    'Model View Controller',
    'REST API',
    'Reverse Proxy',
    'Clean Architecture',
    'Machine Learning',
    'Image Processing',
    'Computer Vision',
  ] as const;

  return (
    <Container id='about' title='About me' subTitle='What a chad'>
      <Grid item xs={12}>
        <Grid container style={{ padding: '2rem 64px' }}>
          <Grid item lg={8} md={12}>
            <Typography variant='h3' component='h4'>
              <Box fontWeight='fontWeightBold'>Intro</Box>
            </Typography>
            <Typography variant='body1' component='span'>
              <Box>
                Hi, I&apos;m Aaron Christopher, an undergraduate computer engineering student. I&apos;m a student at Institut
                Teknologi Sepuluh Nopember. I always try to be honest and be kind to others. Right now, I&apos;m looking for
                a new experience as part of being an expert coder in the Future.{' '}
                <Link
                  to='contact'
                  smooth
                  spy
                  hashSpy
                  href='#contact'
                  className='animated-underline link pb-0.5 cursor-pointer'
                >
                  Reach me out
                </Link>{' '}
                to talk more about my works!
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ padding: '2rem 64px' }}>
          <Grid item xs={12}>
            <Typography variant='h3' component='h4'>
              <Box fontWeight='fontWeightBold'>Education</Box>
            </Typography>
            <Typography variant='h5' component='h5'>
              <Box fontWeight='fontWeightBold'>Institut Teknologi Sepuluh Nopember</Box>
            </Typography>
            <Typography variant='body1' component='span'>
              <Box>June 2019 - August 2023 (Expected)</Box>
            </Typography>
            <Typography variant='body1' component='span'>
              <Box>Bachelor of Engineering in Computer Engineering Candidate</Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ padding: '2rem 64px' }}>
          <Grid item xs={12}>
            <Typography variant='h3' component='h4'>
              <Box fontWeight='fontWeightBold'>Skills</Box>
            </Typography>
          </Grid>

          <Grid item lg={6} md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h5' component='h5'>
                  <Box fontWeight='fontWeightBold'>Tech</Box>
                </Typography>
              </Grid>
              <Grid item lg={9} md={12}>
                {techList.map((list) => (
                  <MeChip label={list} key={list} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h5' component='h6'>
                  <Box fontWeight='fontWeightBold'>Programming Concept</Box>
                </Typography>
              </Grid>
              <Grid item lg={9} md={12}>
                {conceptList.map((list) => (
                  <MeChip label={list} key={list} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
