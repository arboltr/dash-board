import type { Reserva } from '../types/reserva'

export const reservasIniciales: Reserva[] = [
  {
    id: 1,
    cliente: 'Carlos Mendoza',
    fecha: '2026-10-03',
    personas: 5,
    estado: 'confirmada',
    notas: 'Mesa cerca de la ventana',
  },
  {
    id: 2,
    cliente: 'Ana Sofía Gómez',
    fecha: '2026-10-03',
    personas: 4,
    estado: 'confirmada',
  },
  {
    id: 3,
    cliente: 'Luis Roberto Fernández',
    fecha: '2026-10-04',
    personas: 3,
    estado: 'pendiente',
    notas: 'Celebración de cumpleaños',
  },
  {
    id: 4,
    cliente: 'María Elena Torres',
    fecha: '2026-10-04',
    personas: 6,
    estado: 'pendiente',
  },
  {
    id: 5,
    cliente: 'Jorge Ramírez',
    fecha: '2026-10-05',
    personas: 2,
    estado: 'cancelada',
  },
]
