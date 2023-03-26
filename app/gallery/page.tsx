'use client';
// import Image from 'next/image'
import { Inter } from 'next/font/google';

import { Box, Flex, Text, Image } from '@chakra-ui/react';


export default function gallery() {
  return (
    <>
      <Flex
        h={'100vh'}
        bg={'grey'}
        alignItems={'center'}
        justifyContent={{
          base: 'center',
          md: 'flex-end',
          lg: 'space-around',
        }}>
   
        <Flex
          position={'absolute'}
          bottom={{ base: '40', md: '300' }}
          left={28}
          flexDirection={'column'}
          justify={'center'}
        >
          <Box position={'relative'}>
            <Text
              fontFamily={'Fraunces'}
              fontSize={{ base: '20', md: '30' }}
              alignSelf={'start'}
              mt={35}
            >
              create
            </Text>
          </Box>
          <Text
            fontFamily={'Fraunces'}
            fontSize={{ base: '80', md: '150' }}
            position={'absolute'}
            mt={90}
          >
            arts
          </Text>
        </Flex>
        
      </Flex>
    </>
  );
}
