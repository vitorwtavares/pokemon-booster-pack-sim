import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import pokeball from '~/assets/pokeball.png'
import { PackSelectorList } from '~/components'

import * as S from './Header.styles'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const selectPackButtonRef = useRef<any>()

  return (
    <S.HeaderContainer>
      <S.SelectBoosterPackButton onClick={onOpen} ref={selectPackButtonRef}>
        Select booster pack
      </S.SelectBoosterPackButton>
      <S.HeaderImage src={pokeball} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={selectPackButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent background="#222" color="#fff">
          <DrawerCloseButton />
          <DrawerHeader>Select booster pack</DrawerHeader>
          <DrawerBody>
            {/* @TODO: ADD SEARCH FOR PACKS */}
            {/* <Input placeholder="Search packs..." /> */}
            <PackSelectorList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </S.HeaderContainer>
  )
}

export default Header
