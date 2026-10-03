interface TopbarProps {
  onNueva: () => void
}

export default function Topbar({ onNueva }: TopbarProps) {
  return (
    <header className="topbar">
      <h1>Reservas</h1>
      <button type="button" className="btn" onClick={onNueva}>
        + Nueva reserva
      </button>
    </header>
  )
}
