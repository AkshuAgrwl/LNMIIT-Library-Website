import React from 'react';
import { Flex, Divider, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export default function Objectives() {
  return (
    <Flex direction="column">
      <Heading margin="20px 0">Objectives</Heading>
      <Divider style={{ border : '3px solid', borderColor : 'inherit', opacity : 1 }} />
      <br />
      <Flex direction="column">
        <Text as="b">The library operates with the following objectives:</Text>
        <UnorderedList>
          <ListItem><Text>To support the teaching and learning process of the Faculty members, Students, and Research scholars through the provision of knowledge/information.</Text></ListItem>
          <ListItem><Text>To provide access to high-quality information sources  both in print and digital form.</Text></ListItem>
          <ListItem><Text>To embrace and integrate technology to provide access to electronic resources, online catalogue, and digital archives.</Text></ListItem>
          <ListItem><Text>To provide a conducive environment for learning, research, and intellectual exploration through study spaces, collaborative areas, and quiet zones.</Text></ListItem>
          <ListItem><Text>To offer a range of user services, including reference assistance, interlibrary loans, and document delivery, current awareness services to meet the diverse needs of students, faculty, and researchers.</Text></ListItem>
          <ListItem><Text>To promote information literacy skills among students and faculty to enable them to effectively locate, evaluate, and use information resources for academic and research purposes.</Text></ListItem>
          <ListItem><Text>To facilitate research activities by offering access to a wide range of scholarly materials and resources.</Text></ListItem>
          <ListItem><Text>To Provide research assistance, guidance on information retrieval, and training on research methodologies.</Text></ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
