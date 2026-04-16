import { Tooltip } from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { SelectedPackContext } from '~/context/SelectedPack'
import { Pack } from '~/types/api'
import { toaster } from '~/utils/toaster'

import * as S from './PackSelectorListItem.styles'

interface PackSelectorListItemProps {
  pack: Pack
  onClose: () => void
}

const PackSelectorList: FC<PackSelectorListItemProps> = ({ pack, onClose }) => {
  const { selectedPack, setSelectedPack } = useContext(SelectedPackContext)

  const handleClick = () => {
    setSelectedPack({ id: pack.id, total: pack.total })
    onClose()

    toaster.create({
      title: 'Pack selected successfully.',
      description: `${pack.name} selected, open them up!`,
      type: 'success',
      duration: 5000,
      closable: true,
    })
  }

  return (
    <Tooltip.Root positioning={{ placement: 'right' }}>
      <Tooltip.Trigger asChild>
        <S.LogoContainer
          isSelectedPack={pack.id === selectedPack.id}
          onClick={handleClick}
        >
          <S.PackLogo src={pack.images.logo} />
        </S.LogoContainer>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>{pack.name}</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  )
}

export default PackSelectorList
