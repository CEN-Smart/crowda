'use client'

interface FooterMenuItemsProps {
  [key: string]: string
}

const footerMenuItems: FooterMenuItemsProps[] = [
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-of-use' },
  { name: 'Cookies Settings', href: '/cookies-settings' }
]

import { Center, Flex, Stack, Text } from '@chakra-ui/react'
import Container from '../Container'
import Logo from '../Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <Container className='py-20 bg-gradient-to-tr from-lime-400 to-teal-300 via-slate-300'>
        <Center pb={16}>
          <Flex className='flex-col items-center gap-6' >
            <Logo />
            <Flex className='text-gray-700 font-semibold items-center gap-8 '
            >
              {footerMenuItems.slice(0, 3).map((item, i) => (
                <Link className='transition-all duration-300 ease-in-out hover:text-slate-900 hover:underline' key={i} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Center>
        <Flex pt={8} flexDir={{
          base: 'column',
          md: 'row'
        }} className='items-center justify-between border-t border-t-slate-800 gap-4' >
          <Text>
            © {new Date().getFullYear()}  Malaika. All rights reserved.
          </Text>
          <Flex className=' items-center gap-6'>
            {footerMenuItems.slice(3, 6).map((item, i) => (
              <Link className='transition-all duration-300 ease-in-out hover:text-slate-900 underline hover:no-underline text-gray-700' key={i} href={item.href}>
                {item.name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Footer