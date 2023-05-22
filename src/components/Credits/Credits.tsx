import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

import * as S from './Credits.styles'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <S.CreditsButton variant="link" onClick={onOpen}>
        Credits
      </S.CreditsButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Credits</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList mb="40px">
              <ListItem>
                API by{' '}
                <Link href="https://pokemontcg.io/">
                  https://pokemontcg.io/
                </Link>
              </ListItem>
              <ListItem>
                This website is not produced, endorsed, supported, or affiliated
                with Nintendo or The Pokémon Company.
              </ListItem>
            </UnorderedList>
            Copyright © 2023{' '}
            <Link href="https://github.com/vitorwtavares" target="_blank">
              Vítor Tavares
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Header
