import { KeyboardEvent as ReactKeyboardEvent, useEffect, useRef } from 'react'

export function useAccessibilityModal(onCloseModal: () => void) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const incomeButtonRef = useRef<HTMLLabelElement>(null)
  const outcomeButtonRef = useRef<HTMLLabelElement>(null)

  useEffect(() => {
    function handleKeyDown(event: ReactKeyboardEvent) {
      if (event.key === 'Escape') {
        onCloseModal()
      }
    }

    function handleOutsideClick(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onCloseModal()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown as unknown as EventListener,
    )

    document.addEventListener('mousedown', handleOutsideClick)

    if (closeButtonRef.current) {
      closeButtonRef.current.focus()
    }

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown as unknown as EventListener,
      )

      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onCloseModal])

  return { modalRef, closeButtonRef, outcomeButtonRef, incomeButtonRef }
}
