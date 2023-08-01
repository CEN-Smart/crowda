'use client'

import { Box, ButtonGroup, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import CustomButton from './CustomButton';
import Container from './Container';

interface Props {
  primaryHeading: string,
  secondaryHeading?: string,
  description: string,
  leftButton: string,
  rightButton: string
  className?: string
}

export default function CustomHeading({ primaryHeading, secondaryHeading, description, leftButton, rightButton, className }: Props) {
  return (
    <>
      <Container className={classNames(` pt-28 text-center bg-black text-white pb-10 ${className}`)}>
        <Stack spacing={6}>
          {secondaryHeading && <Text className='text-center text-2xl font-bold'>{secondaryHeading}</Text>}
          <Heading fontSize={{
            base: '2xl',
            md: '3xl',
            lg: '4xl',
            xl: '6xl'
          }} maxW={{
            base: 'full',
            md: '80%',
            lg: '70%'
          }} marginX='auto' className=' font-bold'>{primaryHeading} </Heading>
          <Text fontSize={{
            base: 'sm',
            lg: 'md'
          }} maxW={{
            base: 'full',
            md: '50%'
          }} marginX='auto'>{description}</Text>

          <ButtonGroup gap={4} flexDir={{
            base: 'column',
            md: 'row'
          }} w={{
            base: 'full',
            md: 'auto'
          }} className='mx-auto'>
            <CustomButton className=' hover:font-semibold' colorScheme='yellow' title={leftButton} shadow textColor='black' />
            <CustomButton className='hover:bg-slate-950 hover:font-semibold' title={rightButton} colorScheme='black' shadow textColor='white' border />
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  );
}
