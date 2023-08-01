'use client'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Button, DrawerCloseButton, DrawerFooter, Hide, Flex, Stack } from '@chakra-ui/react';
import Container from '../Container';
import Logo from '../Logo';
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import CustomButton from '../CustomButton';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface MenuItems {
  [key: string]: string
}

const menuItems: MenuItems[] = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  }
]


export default function Navbar() {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  return (
    <>
      <Container className='text-white bg-black neon-purple z-10 fixed top-0 w-full flex items-center justify-between' >
        <Logo className='py-6' />
        <Flex className='items-center hidden md:flex'>
          {menuItems.map((item, i) => (
            <Link className={classNames(`transition-all duration-150 py-6 hover:border-l hover:border-t hover:border-r hover:border-b border-b-black hover:font-semibold hover:border-b-black ml-1 px-8`, {
              'border-t border-r border-l font-semibold': pathname === item.href
            })} key={i} href={item.href}>
              {item.name}
            </Link>
          ))}
          <CustomButton className='ml-12 hover:bg-slate-400 hover:font-semibold' title='Connect Wallet' bgColor='colorNavBtn' shadow textColor='black' />
        </Flex>
        <Button size='sm' colorScheme='black' className=' shadow-neon md:hidden'>
          <AiOutlineMenu ref={btnRef} onClick={onOpen} size={24} />
        </Button>
      </Container>

      {/* Mobile NavBar */}

      <Hide above='md'>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='black' className=' text-white'>
            <DrawerCloseButton />
            <DrawerHeader className='neon-purple py-6'>
              <Logo onClose={onClose} />
            </DrawerHeader>

            <DrawerBody mt={16}>
              <Stack spacing={6}>
                {menuItems.map((item, i) => (
                  <Link onClick={onClose} className={classNames(`transition-all duration-300 hover:bg-gray-500 px-6 py-4 rounded-md`, {
                    'bg-gray-500 font-semibold': pathname === item.href
                  })} key={i} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <CustomButton title='Connect Wallet' bgColor='colorNavBtn' shadow textColor='black' className=' mb-8 w-full' />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Hide>

    </>
  );
}
