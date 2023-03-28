'use client';
import React, { useState } from 'react';

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Text,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import Calender from '@/components/Calender';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Flex flexDirection={'column'}>
        <Heading
          textColor={'white'}
          w="100%"
          textAlign={'center'}
          fontWeight="normal"
          mb="2%"
        >
          Session Booking
        </Heading>

        <Flex
          // bg={'red'}
          minH={100}
          w={700}
          justify={'space-around'}
          align={'center'}
        >
          <Flex
            minH={100}
            minW={300}
            // bg={'green'}
            flexDirection={'column'}
          >
            <Flex justify={'start'} p={5}>
              <FormControl mr="5%">
                <FormLabel
                  color={'white'}
                  htmlFor="first-name"
                  fontWeight={'normal'}
                >
                  First name
                </FormLabel>
                <Input
                  fontSize={'10'}
                  p={2}
                  id="first-name"
                  placeholder="First name"
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  textColor={'white'}
                  htmlFor="last-name"
                  fontWeight={'normal'}
                >
                  Last name
                </FormLabel>
                <Input
                  fontSize={'10'}
                  p={2}
                  id="last-name"
                  placeholder="Last name"
                />
              </FormControl>
            </Flex>
            <FormControl mt="2%" alignSelf={'start'} pl={10}>
              <FormLabel
                textColor={'white'}
                htmlFor="email"
                fontWeight={'normal'}
              >
                Number of Outfits
              </FormLabel>
              <Input
                w={10}
                fontSize={'10'}
                p={2}
                id="number"
                type="number"
                placeholder={'No'}
              />
            </FormControl>
            <FormControl mt="2%" alignSelf={'start'} pl={10}>
              <FormLabel
                textColor={'white'}
                htmlFor="email"
                fontWeight={'normal'}
              >
                Email address
              </FormLabel>
              <Input
                w={280}
                fontSize={'10'}
                p={2}
                id="email"
                type="email"
                placeholder={'email'}
              />
              <FormHelperText fontSize={10} textColor={'white'}>
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <FormControl mt="2%" alignSelf={'start'} pl={10}>
              <FormLabel
                textColor={'white'}
                htmlFor="email"
                fontWeight={'normal'}
              >
                Phone Number
              </FormLabel>
              <Input
                w={280}
                fontSize={'10'}
                p={2}
                id="phone"
                type="number"
                placeholder={'phone'}
              />
              <FormHelperText fontSize={10} textColor={'white'}>
                WhatsApp phone number.
              </FormHelperText>
            </FormControl>
          </Flex>

          <Flex h={30} flexDirection={'row'}>
            <Calender />
          </Flex>
        </Flex>

        {/* <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl> */}
      </Flex>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Flex flexDirection={'column'} p={10}>
        <Heading
          textColor={'white'}
          w="100%"
          textAlign={'center'}
          fontWeight="normal"
          mb="3%"
        >
          Package Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]} pl={15} >
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="white"
            _dark={{
              color: 'white.50',
            }}
          >
            Session / Package
          </FormLabel>
          <Select
            id="package"
            name="package"
            autoComplete="package"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            p={1}
          >
            <option>Regular</option>
            <option>Half Session</option>
            <option>Full Session</option>
            <option>Fashion</option>
          </Select>
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]} pl={15} >
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="white"
            _dark={{
              color: 'white.50',
            }}
          >
            In-Studio / Outdoor
          </FormLabel>
          <Select
            id="package"
            name="package"
            autoComplete="package"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            p={1}
          >
            <option>Studio</option>
            <option>Home Session</option>
            <option>Location</option>
          </Select>
        </FormControl>

        

        <FormControl as={GridItem} colSpan={6} p={5}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="white"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
            Additional Information
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            h={35}
            // rounded="md"
          />
        </FormControl>

       
      </Flex>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Flex flexDirection={'column'} justifyContent={'center'} align={'center'}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" color={'white'}>
        Let's tag you
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="white"
            _dark={{
              color: 'gray.50',
            }}
          >
            Instagram
          </FormLabel>
          <InputGroup size="sm">
            {/* <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="white"
              // rounded="md"
            >
              http://
            </InputLeftAddon> */}
            <Input
            minW={70}
              pl={5}
              pr={5}
              type="tel"
              placeholder="www.instagram.com/igname"
              focusBorderColor="brand.400"
              // rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="white"
            _dark={{
              color: 'gray.50',
            }}
          >
            About
          </FormLabel>
          <Textarea
            w={300}
            placeholder="additional information aboutyour shoot"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          
        </FormControl>
      </SimpleGrid>
      </Flex>
    </>
  );
};

export default function multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Flex bg={'black'} h={'100vh'} pt={40} p={100}>
        <Box
          borderWidth="0px"
          maxH={500}
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          width={800}
          p={5}
          m="10px auto"
          as="form"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex p={1} ml={10}>
                <Button
                  bg={'grey'}
                  p={1}
                  textColor={'white'}
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }}
                  isDisabled={step === 1}
                  colorScheme="red"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7rem"
                  p={1}
                  textColor={'white'}
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33);
                    }
                  }}
                  colorScheme="red"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  textColor={'white'}
                  colorScheme="blue"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Booking completed.',
                      description: "Session booked successfully.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
}
