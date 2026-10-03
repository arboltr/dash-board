import EstadoBadge from '../../components/EstadoBadge'
import type { Reserva } from '../../types/reserva'

interface ReservasTableProps {
  reservas: Reserva[]
}

export default function ReservasTable({ reservas }: ReservasTableProps) {
  return (
    <div className="tabla-contenedor">
      {reservas.length === 0 ? (
        <p className="vacio">No hay reservas para este filtro.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Personas</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.cliente}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.personas}</td>
                <td>
                  <EstadoBadge estado={reserva.estado} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
