import React from 'react';
import { Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export default function Timings() {
  return (
    <Flex direction="column">
      <Heading margin="20px 0">Timings</Heading>
      <Divider style={{ border : '3px solid', borderColor : 'inherit', opacity : 1 }} />
      <br />
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem><Text>Monday - Saturday</Text></GridItem>
        <GridItem><Text>9:00 am - 10:00 pm</Text></GridItem>
        <GridItem><Text>Sunday</Text></GridItem>
        <GridItem><Text>10:00 am - 10:00 pm</Text></GridItem>
      </Grid>
      <br />
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem><Text>Holidays*</Text></GridItem>
        <GridItem><Text>10:00 am - 5:00 pm</Text></GridItem>
        <GridItem><Text>During Examination</Text></GridItem>
        <GridItem><Text>Up to 12:00 am midnight</Text></GridItem>
      </Grid>
      <Text>*Closed on National Holidays</Text>
      <br />
      <Text as="b">Circulation Timings:</Text>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem><Text>Monday - Saturday</Text></GridItem>
        <GridItem><Text>9:30 am - 9:30 pm</Text></GridItem>
      </Grid>
    </Flex>
  );
}
