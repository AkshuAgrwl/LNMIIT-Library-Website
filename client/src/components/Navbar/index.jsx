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
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="#">Collection</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/">Print Books</Link></Box>
                <Box margin={5}><Link href="/">Electronic Books</Link></Box>
                <Box margin={5}><Link href="/">Text Books</Link></Box>
                <Box margin={5}><Link href="/">Reference Books</Link></Box>
                <Box margin={5}><Link href="/">{`Children's Books`}</Link></Box>
                <Box margin={5}><Link href="/">Multimedia Collection</Link></Box>
                <Box margin={5}><Link href="/">Theses</Link></Box>
                <Box margin={5}><Link href="/">Reports</Link></Box>
                <Box margin={5}><Link href="/">Specialized Centre Collections</Link></Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">Services</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/">Current Awareness Services</Link></Box>
                <Box margin={5}><Link href="/">CD-RoM/DVD Collection</Link></Box>
                <Box margin={5}><Link href="/">Circulation Service</Link></Box>
                <Box margin={5}><Link href="/">Digital Library Service</Link></Box>
                <Box margin={5}><Link href="/">Reference Service</Link></Box>
                <Box margin={5}><Link href="/">Inter-Library Loan (ILL)</Link></Box>
                <Box margin={5}><Link href="/">Photocopy Services</Link></Box>
                <Box margin={5}><Link href="/">User Centric Workshops/Trainings/Talks</Link></Box>
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
                <Box margin={5}><Link href="/">Research Tools</Link></Box>
                <Box margin={5}><Link href="/">Ask for Article and Inter Library Loan</Link></Box>
                <Box margin={5}><Link href="/">Open Access Resources</Link></Box>
                <Box margin={5}><Link href="/">Reference Management Tools</Link></Box>
                <Box margin={5}><Link href="/">Faculty Publications</Link></Box>
                <Box margin={5}><Link href="/">Author Profiles Platform</Link></Box>
                <Box margin={5}>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Text>Useful Links</Text>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverBody>
                          <Box margin={5}><Link href="/">Shodhganga</Link></Box>
                          <Box margin={5}><Link href="/">ShodhGangotri</Link></Box>
                          <Box margin={5}><Link href="/">Academic Integrity and Prevention of Plagiarism Regulation 2018</Link></Box>
                          <Box margin={5}><Link href="/">Open Access Theses and Dissertations</Link></Box>
                          <Box margin={5}><Link href="/">Journal Finder</Link></Box>
                          <Box margin={5}><Link href="/">Journal Ranking</Link></Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box margin={5}><Link href="/">Ask the Librarian</Link></Box>
      <Box margin={5}>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Link href="/">About Us</Link>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box margin={5}><Link href="/">Write Up</Link></Box>
                <Box margin={5}><Link href="/">Library Team Members</Link></Box>
                <Box margin={5}><Link href="/">LAC Members</Link></Box>
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
