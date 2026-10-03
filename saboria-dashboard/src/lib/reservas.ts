import type { Reserva } from '../types/reserva'

export function totalPersonas(reservas: Reserva[]): number {
  return reservas.reduce((total, reserva) => total + reserva.personas, 0)
}
