import { FC, ReactNode, memo } from 'react'
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button 
      bg="teal.400" 
      color="white" 
      _hover={{ opacity: 0.8 }} 
      onClick={onClick}
      isLoading={loading}
      isDisabled={disabled}
    >
      {children}
    </Button>
  )
});

export default PrimaryButton
