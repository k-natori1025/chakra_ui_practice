import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { FC, memo } from 'react'

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <div>
      <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button width="100%" onClick={() => {
                onClickHome()
                onClose()
              }}>TOP</Button>
              <Button width="100%" onClick={() => {
                onClickUserManagement()
                onClose()
              }}>ユーザー一覧</Button>
              <Button width="100%" onClick={() => {
                onClickSetting()
                onClose()
              }}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  )
});

export default MenuDrawer
