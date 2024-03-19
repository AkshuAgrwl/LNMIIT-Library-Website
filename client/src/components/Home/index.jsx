import React from 'react';
import { Container } from '@chakra-ui/react';

import About from './about';
import Objectives from './objectives';
import Timings from './timings';

import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isMobile = useMediaQuery({ query : '(max-width: 876px)' });

  return (
    <Container maxW={isMobile ? '95%': '60%'}>
      <About />
      <br />
      <Objectives />
      <br />
      <Timings />
    </Container>
  );
}
