'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/UP.svg'
import { useRouter } from 'next/navigation'

interface LogoProps {
  onClose?: () => void
  className?: string
}
const Logo = ({ onClose, className }: LogoProps) => {
  const router = useRouter()
  const goToHome = () => {
    onClose && onClose()
    router.push('/')
  }
  return (
    <>
      <Link className={className} onClick={goToHome} href="/">
        <Image
          src={logo}
          alt="logo"
          width={35}
          height={35} priority />
      </Link>
    </>
  )
}

export default Logo