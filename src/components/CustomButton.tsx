import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ButtonProps {
  title: string,
  bgColor?: string,
  border?: boolean,
  textColor?: string,
  big?: boolean,
  icon?: IconType,
  onClick?: () => void
  className?: string
  shadow?: boolean
  colorScheme?: string
}

export default function CustomButton({ title, bgColor, border, textColor, big, icon: Icon, onClick, shadow, className, colorScheme }: ButtonProps) {
  return (
    <>
      <Button onClick={onClick} fontWeight='normal'
        border={border ? `1px solid ${textColor}` : 'none'}
        color={textColor}
        colorScheme={colorScheme ? colorScheme : ''}
        bg={bgColor}
        size={big ? 'lg' : 'md'}
        px={big ? '16' : '4'}
        py={big ? '8' : '5'}
        borderRadius={big ? 'full' : 'md'}
        className={`${className} ${shadow && 'drop-shadow-2xl'} transition duration-200 active:transform active:scale-95 active:shadow-none`}
        rightIcon={Icon && <Icon size={20} />}
      >
        {title}
      </Button>
    </>
  );
}
