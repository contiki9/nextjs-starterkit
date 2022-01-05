import React from 'react'
import { Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { SidebarContent, MobileNav } from '../../global/Sidebar/'
export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </>
  )
}
