import type { EstadoReserva } from '../../types/reserva'

export type TipoFiltro = EstadoReserva | 'todas'

interface FiltrosProps {
  valor: TipoFiltro
  onCambiar: (nuevoFiltro: TipoFiltro) => void
}

const OPCIONES_FILTRO: { label: string; valor: TipoFiltro }[] = [
  { label: 'Todas', valor: 'todas' },
  { label: 'Pendiente', valor: 'pendiente' },
  { label: 'Confirmada', valor: 'confirmada' },
  { label: 'Cancelada', valor: 'cancelada' },
]

export default function Filtros({ valor, onCambiar }: FiltrosProps) {
  return (
    <div className="filtros">
      {OPCIONES_FILTRO.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          className={valor === opcion.valor ? 'chip activo' : 'chip'}
          onClick={() => onCambiar(opcion.valor)}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  )
}
