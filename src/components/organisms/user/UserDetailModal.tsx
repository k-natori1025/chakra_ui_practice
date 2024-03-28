import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailModal: FC<Props> = memo((props) => {

  const { isOpen, onClose } = props;

  return (
    <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        motionPreset='slideInBottom'
      >
        <ModalOverlay>
          <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value="hoge" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="hoge hogetarou" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input value="test@example.com" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value="08012345678" isReadOnly />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
  )
});

export default UserDetailModal
