import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box, Button, Link as LinkMui, Typography, Zoom,
} from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Typist from 'react-typist';
import styled from 'styled-components';

import hero from '../assets/steph.jpg';
import style from './Home.module.css';
import UnstyledButtonCustom from './MeButton';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  padding: 5rem 2.25rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  @media (min-width: 1024px) {
    flex-grow: 1;
    padding-right: 6rem;
  }
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 4rem;
    align-items: flex-start;
    text-align: left;
  }
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  align-items: center;
  text-align: center;
  z-index: 10;
`;

const meTitles = [
  'Undergraduate Student',
  'Wee',
  'Web Developer',
  'Backend Engineer',
  'Python Enthusiast',
];

const cvButtonStyle = {
  backgroundColor: '#992323',
  color: '#ddd',
  '&:hover': {
    backgroundColor: '#eb2754',
    color: '#000',
  },
  marginTop: '5%',
};

let typoTheme = createTheme();
typoTheme = responsiveFontSizes(typoTheme);

const Home = (): JSX.Element => {
  const [isChanged, setIsChanged] = useState(true);
  const [index, setIndex] = useState(0);

  const meTypist = (
    <Typist
      avgTypingDelay={60}
      onTypingDone={() => {
        setIndex(index + 1 < meTitles.length ? index + 1 : 0);
        setIsChanged(false);
      }}
    >
      {meTitles[index]}
      <Typist.Backspace
        count={meTitles[index]?.length}
        delay={500}
      />
    </Typist>
  );

  useEffect(() => {
    setIsChanged(true);
  }, [isChanged]);

  return (
    <section id="home" className={style.home}>
      <Container>
        <Zoom in style={{ transitionDelay: '200ms' }}>
          <TextContainer>
            <ThemeProvider theme={typoTheme}>
              <Typography variant="h3" component="h2">
                <Box fontWeight="fontWeightBold">
                  Hi, I&apos;m
                  {' '}
                  <span style={{ color: '#eb2754' }}>Aaron</span>
                  .
                </Box>
              </Typography>
              <Typography variant="h6" component="h3">
                {isChanged ? meTypist : null}
              </Typography>
            </ThemeProvider>
            <Button variant="outlined" sx={cvButtonStyle}>
              <LinkMui
                href="cv.pdf"
                rel="noopener"
                color="inherit"
                underline="none"
                target="_blank"
              >
                See My CV
              </LinkMui>
            </Button>
          </TextContainer>
        </Zoom>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <figure className="w-36 md:w-52 z-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
              width="300"
              height="465"
            />
          </figure>
        </div>
      </Container>
      <div className="absolute bottom-0 left-1/2 text-3xl transform -translate-y-1/2 -translate-x-1/2">
        <Link to="about" smooth spy hashSpy href="#about" aria-label="LESGO">
          <UnstyledButtonCustom ele={(
            <span>
              <Typography>
                <Box fontWeight="fontWeightBold">
                  <ExpandMoreIcon />
                  LESGO
                </Box>
              </Typography>
            </span>
          )}
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
