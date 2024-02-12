import React from 'react';

import { Box, Flex, Image, Link, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal, Text } from '@chakra-ui/react';


export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box margin={5}><Link href="/">Home</Link></Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="#">Find</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/">Books</Link></Box>
                <Box margin={5}><Link href="/">E-Books</Link></Box>
                <Box margin={5}><Link href="/">Databases</Link></Box>
                <Box margin={5}><Link href="/">Theses and Reports</Link></Box>
                <Box margin={5}><Link href="/">Archived Question Papers</Link></Box>
                <Box margin={5}><Link href="/">Course Reserves</Link></Box>
                <Box margin={5}><Link href="/">Faculty Publications</Link></Box>
                <Box margin={5}><Link href="/">BTP Reports</Link></Box>
                <Box margin={5}><Link href="/">Open Access Resources</Link></Box>
                {/* <Box margin={5}>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Text>Mandatory Disclosures</Text>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverBody>
                          <Box margin={5}><Link href="/aicte">AICTE</Link></Box>
                          <Box margin={5}><Link href="/naac">NAAC</Link></Box>
                          <Box margin={5}><Link href="/nirf">NIRF</Link></Box>
                          <Box margin={5}><Link href="/aishe">AISHE</Link></Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box> */}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="#">Borrow</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/">Reserve a Book</Link></Box>
                <Box margin={5}><Link href="/">Request to Articles</Link></Box>
                <Box margin={5}><Link href="/">Request for Inter Library Loan</Link></Box>
                <Box margin={5}><Link href="/">Borrow CD/DVDs</Link></Box>
                <Box margin={5}><Link href="/">Suggest a Book</Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}><Link href="/">Collection</Link></Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">Services</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/"></Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">Research Support</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/"></Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">Ask the Librarian</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/"></Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">About Us</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/"></Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Image width={150} src="/LNMIIT-logo-transparent.png" alt="LNMIIT logo" />
      </Box>
    </Flex>
  );
}
