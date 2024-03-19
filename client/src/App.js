import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
