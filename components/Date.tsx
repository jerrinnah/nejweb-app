import React, { useState } from 'react';
import { Text,Flex, Box } from '@chakra-ui/react';

interface dateDate {
  prevState: null;
}

function Date() {
  const [date, setDate] = useState('null');
  console.log('Date', date);

  return (
    <>
      <Flex flexDirection={'column'} h={20} justify={'space-around'} p={3}>
        <Text color={'white'}>Select Date:  </Text>
        <input type="date" onChange={e => setDate(e.target.value)} />
        <Box></Box>
      </Flex>
      
    </>
  );
}

export default Date;
