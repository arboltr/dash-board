import type { ReactNode } from 'react'

interface ModalProps {
  titulo: string
  children: ReactNode
  onCerrar: () => void
}

export default function Modal({ titulo, children, onCerrar }: ModalProps) {
  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{titulo}</h2>
        {children}
        <button type="button" className="btn secundario" onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
