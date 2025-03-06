/* eslint-disable jsx-a11y/anchor-is-valid */
import { TableColumn } from "react-data-table-component"
import { ISchedule } from "../ischedule"
import { Link } from "react-router-dom"

const calculateTimeReal = (row: ISchedule, currentTime: number) => {
  let split = row?.dateTime?.toString().split(' ')
  let format = split[0].split('/').reverse().join('-')
  const dataEnd = new Date(format)
  const diffEmMilissegundos = dataEnd.getTime() - currentTime;
  const diffEmHoras = diffEmMilissegundos / (1000 * 60 * 60);
  return `Falta.: ${diffEmHoras.toFixed(0)} Horas/minutos`
}

export const keysGridSchedule = (
  currentTime: number, 
  deleteAsync: (id: number | undefined) => void, 
  status: (id: number | undefined) => void, 
  alert_patient: (id: number | undefined) => void
): TableColumn<ISchedule>[] => [
  {
    name: 'Paciente',
    selector: row => (row.people)?row.people?.name : "",
  },
  {
    name: 'Descrição',
    selector: row => row.title,
  },
  {
    name: 'Data da consulta',
    selector: (row) => {
        const missing = calculateTimeReal(row, currentTime)
        return `${row?.dateTime?.toString()} - ${missing}`
    },
  },
  {
    name: "#",
    cell: (row: ISchedule): JSX.Element => {
      const id = row?.id ?? undefined;
      return (
        <>
          <Link to={`update/${id}`} title="Atualizar esse agendamento">
            <i className="material-icons">edit</i>
          </Link>
          <a href="#" onClick={() => deleteAsync(id)} title="Deletar esse agendamento?">
            <i className="material-icons">delete</i>
          </a>
          <a href="#" onClick={() => status(id)} title="Compareceu">
            <i className="material-icons">{row.appear ? "check_box" : "check_box_outline_blank"}</i>
          </a>
          <a href="#" onClick={() => alert_patient(id)} title="Avisar o paciente">
            <i className="material-icons">send</i>
          </a>
        </>
      );
    },
  },
]
