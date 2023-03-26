import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

function Footer() {
  return (
      <Flex
          width={'100%'}
    position={'fixed'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    bottom={50}
    // top={70}
    >
    <Text top={20}>Welcome to NEJstudios.</Text>
    <Text bottom={10}>Take a glance through some of our works</Text>
  </Flex>
      
      
  )
}

export default Footer