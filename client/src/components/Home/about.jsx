import React from 'react';
import { Divider, Flex, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex direction="column">
      <Heading margin="20px 0">About Central Library</Heading>
      <Divider style={{ border : '3px solid', borderColor : 'inherit', opacity : 1 }} />
      <br />
      <Text margin="5px 0">
        To meet the vision and mission of the Institute, the library has been established “to promote knowledge generation and application through its effective dissemination”. The library, therefore, acts as main learning resource centre of the Institute and provides services and facilities to meet the requirements and objectives of the Institute’s.
      </Text>
      <Text margin="5px 0">
        Central Library occupies a place of pride in LNMIIT and is an essential component of the institute’s outstanding research and education mission. It is a most lively place on the campus providing a safe, comfortable and friendly environment that enables learning and advancement of knowledge.
      </Text>
    </Flex>
  );
}
