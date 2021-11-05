import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography, Box, Zoom } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
import ParticleComponent from './ParticleComponent';
import UnstyledButtonCustom from './MeButton';
import style from './Home.module.css';

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
  'LordRonzzzzz',
  'LortRonzzzzyy',
  'Webdev',
];

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
      <ParticleComponent />
      <Container>
        <Zoom in style={{ transitionDelay: '200ms' }}>
          <TextContainer>
            <Typography variant="h3" component="h2">
              <Box fontWeight="fontWeightBold">Hi, I&apos;m LordRonz.</Box>
            </Typography>
            <Typography variant="h6" component="h4">
              {isChanged ? meTypist : null}
            </Typography>
          </TextContainer>
        </Zoom>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </Container>
      <div className="absolute bottom-0 left-1/2 text-3xl transform -translate-y-1/2 -translate-x-1/2">
        <Link to="about" smooth>
          <UnstyledButtonCustom ele={(
            <span>
              <ExpandMoreIcon />
              LESGO
            </span>
          )}
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
