import { Tooltip, useToast } from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { SelectedPackContext } from '~/context/SelectedPack'
import { Pack } from '~/types/api'

import * as S from './PackSelectorListItem.styles'

interface PackSelectorListItemProps {
  pack: Pack
  onClose: () => void
}

const PackSelectorList: FC<PackSelectorListItemProps> = ({ pack, onClose }) => {
  const { selectedPack, setSelectedPack } = useContext(SelectedPackContext)

  const toast = useToast()

  const handleClick = () => {
    setSelectedPack({ id: pack.id, total: pack.total })
    onClose()

    toast({
      title: `Pack selected successfully.`,
      description: `${pack.name} selected, open them up!`,
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }

  return (
    <Tooltip label={pack.name} placement="right">
      <S.LogoContainer
        isSelectedPack={pack.id === selectedPack.id}
        onClick={handleClick}
      >
        <S.PackLogo src={pack.images.logo} />
      </S.LogoContainer>
    </Tooltip>
  )
}

export default PackSelectorList
