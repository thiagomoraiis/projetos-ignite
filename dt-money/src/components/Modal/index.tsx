import { createPortal } from 'react-dom'
import { X } from 'phosphor-react'
import { TransactionsForm } from '../TransactionsForm'
import { CloseButton, ModalContent, Overlay } from './styles'
import { useAccessibilityModal } from '../../hooks/useAccessibilityModal'

export function Modal({ onCloseModal }: { onCloseModal(): void }) {
  const root = document.getElementById('root') as HTMLElement

  const accessibilityModal = useAccessibilityModal(onCloseModal)
  const { closeButtonRef, modalRef } = accessibilityModal

  return createPortal(
    <Overlay>
      <ModalContent
        ref={modalRef}
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <CloseButton
          onClick={onCloseModal}
          ref={closeButtonRef}
          aria-label="Fechar"
        >
          <X size={24} weight="bold" />
        </CloseButton>

        <h2 id="modalTitle">Nova transação</h2>

        <TransactionsForm {...accessibilityModal} />
      </ModalContent>
    </Overlay>,
    root,
  )
}
