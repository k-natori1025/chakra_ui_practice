import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react'

type Props = {
  userImage: string;
  userName: string;
  fullName: string;
}

const UserCard: FC<Props> = memo((props) => {

  const { userImage, userName, fullName } = props;

  return (
    <Box w="260px" h="260px" bg= "white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: "0.8" }}>
      <Stack textAlign="center">
        <Image 
          boxSize="160px" 
          borderRadius="full" 
          src={userImage}
          margin="auto"
          alt={userName}
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  )
});

export default UserCard
