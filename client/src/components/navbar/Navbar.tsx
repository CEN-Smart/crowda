'use client'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Button, DrawerCloseButton, DrawerFooter, Hide, Flex, Stack } from '@chakra-ui/react';
import Container from '../Container';
import Logo from '../Logo';
import { useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import CustomButton from '../CustomButton';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useWeb3Modal } from '@web3modal/react';



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
  const { open, close } = useWeb3Modal()

  return (
    <>
      <Container className='text-black bg-nav shadow-custom z-10 border-b border-b-black fixed top-0 w-full flex items-center justify-between' >
        <Logo className='py-6' />
        <Flex className='items-center hidden md:flex'>
          {menuItems.map((item, i) => (
            <Link className={classNames(`transition-all duration-150 py-6 hover:border hover:border-black hover:font-semibold ml-1 px-8`, {
              'border border-black font-semibold': pathname === item.href
            })} key={i} href={item.href}>
              {item.name}
            </Link>
          ))}
          <CustomButton className='ml-12 hover:bg-slate-400 hover:font-semibold' onClick={async () => { await open() }} title='Connect Wallet' bgColor='colorNavBtn' shadow textColor='black' />
        </Flex>
        <Button ref={btnRef} onClick={onOpen} size='sm' className='btn__nav md:hidden'>
          <AiOutlineMenu size={24} />
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
          <DrawerContent bg='white' className=' text-black'>
            <DrawerHeader className='shadow-custom  bg-nav border-b flex items-center justify-between border-b-black py-[1.12rem]'>
              <Logo onClose={onClose} />
              <Button onClick={onClose} size='sm' className='btn__nav'>

                <AiOutlineClose size={24} />
              </Button>
            </DrawerHeader>

            <DrawerBody mt={16}>
              <Stack spacing={6}>
                {menuItems.map((item, i) => (
                  <Link onClick={onClose} className={classNames(`transition-all duration-150 hover:font-semibold hover:bg-gray-200 px-6 py-4 rounded-md`, {
                    ' bg-gray-200 font-semibold': pathname === item.href
                  })} key={i} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <CustomButton title='Connect Wallet' bgColor='colorNavBtn' shadow textColor='black' className=' py-[1.6rem] mb-8 w-full' />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Hide>

    </>
  );
}
