import { Center, Spinner, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { FC, memo, useCallback, useEffect } from 'react'
import UserCard from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import UserDetailModal from '../organisms/user/UserDetailModal';

const UserManagement: FC = memo(() => {

  const { getAllUsers, users, loading } = useAllUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const onClickUser = useCallback(() => {
    onOpen()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllUsers(), [])

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner/>
        </Center>
      ) :(
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard 
                userImage="https://source.unsplash.com/random" 
                userName={user.username} 
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
});

export default UserManagement
