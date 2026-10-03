import type { EstadoReserva } from '../types/reserva'

interface EstadoBadgeProps {
  estado: EstadoReserva
}

export default function EstadoBadge({ estado }: EstadoBadgeProps) {
  return <span className={'estado ' + estado}>{estado}</span>
}
