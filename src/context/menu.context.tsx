import { Dispatch, SetStateAction, createContext, useState } from 'react'

type IsMenuOpenType = {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

type Props = {
  children: JSX.Element
}

export const IsMenuOpenContext = createContext<IsMenuOpenType>({
  isMenuOpen: false,
  setIsMenuOpen: () => null
})

const IsMenuOpenProvider = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const values: IsMenuOpenType = {
    isMenuOpen,
    setIsMenuOpen
  }

  return (
    <IsMenuOpenContext.Provider value={values}>
      {children}
    </IsMenuOpenContext.Provider>
  )
}

export default IsMenuOpenProvider