import { useState } from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import { Modal } from '../Modal'

export function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleModalOpening() {
    setIsOpenModal(true)
  }

  function handleModalClosure() {
    setIsOpenModal(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/Logo.svg" alt="" />

        <NewTransactionButton
          onClick={handleModalOpening}
          aria-haspopup="dialog"
        >
          Nova transação
        </NewTransactionButton>
        {isOpenModal && <Modal onCloseModal={handleModalClosure} />}
      </HeaderContent>
    </HeaderContainer>
  )
}
