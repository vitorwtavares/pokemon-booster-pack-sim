import { FC, PropsWithChildren, useState } from 'react'
import { defaultSelectedPack, SelectedPackContext } from './SelectedPackContext'

export const SelectedPackProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedPack, setSelectedPack] = useState(defaultSelectedPack)

  return (
    <SelectedPackContext.Provider value={{ selectedPack, setSelectedPack }}>
      {children}
    </SelectedPackContext.Provider>
  )
}
