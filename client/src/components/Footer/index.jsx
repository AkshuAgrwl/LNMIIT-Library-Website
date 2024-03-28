import React from 'react';

import { Box, Divider, Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import { MdEmail, MdLocalPhone, MdLocationOn, MdPublic } from 'react-icons/md';

import MediaQuery, { useMediaQuery } from 'react-responsive';

export default function Footer() {
  const isMobile = useMediaQuery({ query : '(max-width: 876px)' });

  return (
    <Flex direction={isMobile ? 'column': 'row'} justifyContent="center" marginTop={10} paddingY={10}>
      <Flex direction="column" alignItems={isMobile ? 'center' : 'initial'} marginX={8} marginY={3}>
        <Box margin={5}><Heading size="md">EXPLORE LNMIIT</Heading></Box>
        <Box marginX={5} marginY={1}><Link>About LNMIIT</Link></Box>
        <Box marginX={5} marginY={1}><Link>Campus Life</Link></Box>
        <Box marginX={5} marginY={1}><Link>Research</Link></Box>
        <Box marginX={5} marginY={1}><Link>Events</Link></Box>
        <Box marginX={5} marginY={1}><Link>Adacemics</Link></Box>
        <Box marginX={5} marginY={1}><Link>News</Link></Box>
      </Flex>
      <Flex direction="column" alignItems={isMobile ? 'center' : 'initial'} marginX={8} marginY={3}>
        <Box margin={5}><Heading size="md">QUICK LINKS</Heading></Box>
        <Box marginX={5} marginY={1}><Link>Departments</Link></Box>
        <Box marginX={5} marginY={1}><Link>Center of Excellence</Link></Box>
        <Box marginX={5} marginY={1}><Link>Tenders</Link></Box>
        <Box marginX={5} marginY={1}><Link>Careers</Link></Box>
        <Box marginX={5} marginY={1}><Link>Fee Payment Link</Link></Box>
        <Box marginX={5} marginY={1}><Link>Policies and Procedures</Link></Box>
        <Box marginX={5} marginY={1}><Link>MIS Portal Link</Link></Box>
      </Flex>
      <Flex direction="column" alignItems={isMobile ? 'center' : 'initial'} marginX={8} marginY={3}>
        <Box margin={5}><Heading size="md">OTHER LINKS</Heading></Box>
        <Box marginX={5} marginY={1}><Link>Information Display Policy</Link></Box>
        <Box marginX={5} marginY={1}><Link>RTI</Link></Box>
        <Box marginX={5} marginY={1}><Link>Forms</Link></Box>
        <Box marginX={5} marginY={1}><Link>Getting to LNMIIT</Link></Box>
        <Box marginX={5} marginY={1}><Link>Contact Us</Link></Box>
        <Box marginX={5} marginY={1}><Link>Grievance Redressal Portal</Link></Box>
      </Flex>
      <MediaQuery minWidth={877}>
        <Flex minHeight="100%" marginY={3}>
          <Divider orientation="vertical" style={{ border : '3px solid', borderColor : 'inherit', opacity : 1 }} />
        </Flex>
      </MediaQuery>
      <MediaQuery maxWidth={876}>
        <Flex justifyContent="center">
          <Divider width="75%" orientation="horizontal" style={{ border : '3px solid', borderColor : 'inherit', opacity : 1 }} />
        </Flex>
      </MediaQuery>
      <Flex direction="column" alignItems={isMobile ? 'center' : 'initial'} marginX={8} marginY={3}>
        <Box margin={5}>
          <Image width={180} src="/LNMIIT-logo-transparent.png" alt="LNMIIT logo" />
        </Box>
        <Box marginX={5} maxWidth="18rem">
          <Flex alignItems="center" marginY={1}>
            <Icon as={MdLocationOn} marginRight={2} />
            <Link href="https://maps.app.goo.gl/9WLTHKdvQwLaHyDZ6">
              <Text>Rupa ki Nangal, Post. Sumel, Via. Jamdoli, Jaipur, Rajasthan - 302031</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" marginY={1}>
            <Icon as={MdLocalPhone} marginRight={2} />
            <Link href="tel:01412688090">
              <Text>0141 268 8090</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" marginY={1}>
            <Icon as={MdPublic} marginRight={2} />
            <Link href="https://lnmiit.ac.in">
              <Text>https://lnmiit.ac.in</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" marginY={1}>
            <Icon as={MdEmail} marginRight={2} />
            <Link href="mailto:info.lnmiit@lnmiit.ac.in">
              <Text>info.lnmiit@lnmiit.ac.in</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
