
import Container from '@/components/Container';
import CustomHeading from '@/components/CustomHeading';
import Image from 'next/image';
import heroImg from '../../public/bgImage.svg';
import CardComponent from '@/components/CardComponent';
import GridContent from '@/components/GridContent';
import SecondaryHeading from '@/components/SecondaryHeading';
import CustomButton from '@/components/CustomButton';
export default function HomePage() {
  return (
    <>
      <CustomHeading className='bg-black pt-[7.5rem] text-white' primaryHeading='Unleash the Power of Your Purpose: Crowdfund with Crowda!' description='The Blockchain Powered Crowdfunding Platform that Rewards Backers and Fuels Dreams' leftButton='Create a project' rightButton='Support a project' leftColorScheme='yellow' rightBtnTextColor='white' rightBtnClassName='hover:font-semibold'
        leftBtnClassName='hover:font-semibold'
      />

      <Container className='bg-black pb-16'>
        <Image className=' rounded-lg opacity-50 object-cover' src={heroImg} width={1920} height={1080} alt='Hero Image'
          priority
          blurDataURL='data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/6t8QOwAAAABJRU5ErkJggg=='
          placeholder='blur'
        />
      </Container>
      <GridContent mainH='How Malaika Works' mainT={`Whether you're an individual with a brilliant idea, a group with a collective mission, or an organization with  a cause to champion, Malaika provides you with a user-friendly platform to set up your campaign. Share your story, define your funding target, and showcase your vision to the world `} priH='Create Your Vision' priT={`Get started by crafting your project with a compelling description and visuals, and defining your funding goal and reward tokens `} secH='Rally Support and Achieve Success' secT={`Launch your campaign on Malaika's blockchain-powered platform, share it widely, and witness global backers rally to support your cause, driving your project to success `} terH='Reward Your Backers and Bring Your Vision to Life' terT={`Show appreciation to backers with unique tokens, bring your projects to life, provide updates, and build lasting relations through Malaika's rewarding platform`} />
      <Container className='pt-16'>
        <SecondaryHeading center heading='Featured Projects' title={`The Malaika platform is the best way to invest in projects and get rewarded for your support. `} />
      </Container>

      <Container>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Container>

      <Container className='py-12 text-center'>
        <CustomButton className='transition-all duration-300 font-bold text-xl lg:text-2xl hover:text-white hover:bg-slate-800' big title='Explore More' textColor='black' border />
      </Container>
      <GridContent mainH='Why Malaika?' mainT={`Malaika Empowering creators, rewarding backers. A blockchain-powered crowdfunding platform where creators break free from limits, and backers earn tokens for meaningful support. Together, we ignite innovation and make a difference`} priH='Empowering Dreams' priT={`Malaika offers a platform where creators can showcase their innovative ideas, passion projects, and social causes, enabling them to raise funds and turn their dreams into reality`} secH='Blockchain Security' secT={`With Malaika built on the blockchain, both creators and backers benefits from enhanced security and transparency. Smart contracts ensure that funds are securely managed, and backers can trust in the authenticity of projects`} terH='Rewards and Impact' terT={`Backers on Malaika not only support meaningful projects but also receive rewards in returns, making their contributions even more fulfilling. Join Malaika to be a part of a positive impact on the projects and causes you care about`} />

      <Container className='bg-black text-black  p-10'>
        <CustomHeading className='bg-white py-8 mx-auto rounded-md shadow-custom'
          secondaryHeading='With Malaika'
          primaryHeading='Boost Your Impact' description='As a backer, you can earn rewards for helping to fund projects. Support the projects you believe in and get rewarded for it!' leftButton='Create a project' rightButton='Support a project' rightBtnTextColor='black' leftBtnBgColor='black' rightBtnClassName='hover:font-semibold'
          leftBtnClassName='hover:font-semibold' />
      </Container>
    </>
  );
}
