import React from 'react';
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import ParticleComponent from './ParticleComponent';

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

const About = (): JSX.Element => (
  <section id="about">
    <ParticleComponent />
    <Container>
      <TextContainer>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I&apos;m LordRonz.
          <br className="hidden lg:inline-block" />
          I love to build amazing apps.
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See My Past Work
          </a>
        </div>
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
      <FaArrowDown />
    </div>
  </section>
);

export default About;
