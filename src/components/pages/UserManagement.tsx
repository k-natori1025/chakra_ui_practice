import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react'
import UserCard from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';

const UserManagement: FC = memo(() => {

  const { getAllUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getAllUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
});

export default UserManagement
