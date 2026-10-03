import { useEffect, useState } from 'react'
import MetricCard from './components/MetricCard'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Filtros from './features/reservas/Filtros'
import type { TipoFiltro } from './features/reservas/Filtros'
import ReservaForm from './features/reservas/ReservaForm'
import ReservasTable from './features/reservas/ReservasTable'
import { totalPersonas } from './lib/reservas'
import { reservasIniciales } from './services/reservas'
import type { Reserva } from './types/reserva'

export default function App() {
  const [modalAbierto, setModalAbierto] = useState<boolean>(false)
  const [reservas, setReservas] = useState<Reserva[]>(() => {
    const guardadas = localStorage.getItem('reservas')
    if (guardadas) {
      try {
        return JSON.parse(guardadas) as Reserva[]
      } catch {
        return reservasIniciales
      }
    }
    return reservasIniciales
  })
  const [filtro, setFiltro] = useState<TipoFiltro>('todas')

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas))
  }, [reservas])

  const agregarReserva = (nueva: Reserva) => {
    setReservas((prevReservas) => [nueva, ...prevReservas])
    setModalAbierto(false)
  }

  const confirmadas = reservas.filter((r) => r.estado === 'confirmada').length
  const pendientes = reservas.filter((r) => r.estado === 'pendiente').length

  const reservasVisibles =
    filtro === 'todas'
      ? reservas
      : reservas.filter((r) => r.estado === filtro)

  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Topbar onNueva={() => setModalAbierto(true)} />
        <section className="metrics">
          <MetricCard titulo="Reservas" valor={reservas.length} />
          <MetricCard titulo="Confirmadas" valor={confirmadas} />
          <MetricCard titulo="Pendientes" valor={pendientes} />
          <MetricCard
            titulo="Personas"
            valor={totalPersonas(reservas)}
            detalle="en total"
          />
        </section>
        <Filtros valor={filtro} onCambiar={setFiltro} />
        <ReservasTable reservas={reservasVisibles} />
      </main>

      {modalAbierto && (
        <Modal
          titulo="Nueva reserva"
          onCerrar={() => setModalAbierto(false)}
        >
          <ReservaForm onGuardar={agregarReserva} />
        </Modal>
      )}
    </div>
  )
}
