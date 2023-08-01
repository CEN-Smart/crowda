
import Container from '@/components/Container';
import CustomHeading from '@/components/CustomHeading';
import Image from 'next/image';
import heroImg from '../../public/bgImage.svg';
export default function HomePage() {
  return (
    <>
      <CustomHeading primaryHeading='Unleash the Power of Your Purpose: Crowdfund with Crowda!' description='The Blockchain Powered Crowdfunding Platform that Rewards Backers and Fuels Dreams' leftButton='Create a project' rightButton='Support a project' />

      <Container className='bg-black pb-16'>
        <Image className=' rounded-lg opacity-50 object-cover' src={heroImg} width={1920} height={1080} alt='Hero Image'
          priority
          blurDataURL='data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/6t8QOwAAAABJRU5ErkJggg=='
          placeholder='blur'
        />
      </Container>
    </>
  );
}
