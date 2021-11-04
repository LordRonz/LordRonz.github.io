import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typist from 'react-typist';
import ParticleComponent from './ParticleComponent';
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
  'LordRonzzzzz',
  'LortRonzzzzyy',
  'Webdev',
];

const About = (): JSX.Element => {
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
    <section id="about">
      <ParticleComponent />
      <Container>
        <TextContainer>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I&apos;m LordRonz.
            <br className="hidden lg:inline-block" />
            I love to build amazing apps.
          </h1>
          <Typography variant="h6" component="h4">
            {isChanged ? meTypist : null}
          </Typography>
        </TextContainer>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </Container>
      <div className="absolute bottom-0 left-1/2 text-3xl transform -translate-y-1/2 -translate-x-1/2">
        <UnstyledButtonCustom ele={(
          <span>
            <ExpandMoreIcon />
            LESGO
          </span>
        )}
        />
      </div>
    </section>
  );
};

export default About;
