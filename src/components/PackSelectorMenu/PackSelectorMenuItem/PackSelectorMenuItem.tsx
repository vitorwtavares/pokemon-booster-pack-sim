import { Tooltip } from '@chakra-ui/react'
import { useContext } from 'react'
import { SelectedPackContext } from '~/context/SelectedPack'
import { Pack } from '~/types/api'

import * as S from './PackSelectorMenuItem.styles'

interface PackSelectorMenuItemProps {
  pack: Pack
}

const PackSelectorMenuItem = ({ pack }: PackSelectorMenuItemProps) => {
  const { selectedPack, setSelectedPack } = useContext(SelectedPackContext)

  return (
    <Tooltip label={pack.name} placement="right">
      <S.LogoContainer
        isSelectedPack={pack.id === selectedPack.id}
        onClick={() => setSelectedPack({ id: pack.id, total: pack.total })}
      >
        <S.PackLogo src={pack.images.logo} />
      </S.LogoContainer>
    </Tooltip>
  )
}

export default PackSelectorMenuItem
