import { TableColumn } from "react-data-table-component"
import { ISchedule } from "../ischedule"

const calculateTimeReal = (row: ISchedule) => {
    let split = row?.dateTime?.toString().split(' ')
    let format = split[0].split('/').reverse().join('-')
    const dataNow = new Date(Date.now())
    const dataEnd = new Date(format)
    const diffEmMilissegundos = dataEnd.getTime() - dataNow.getTime();
    const diffEmHoras = diffEmMilissegundos / (1000 * 60 * 60);
    return `Falta.: ${diffEmHoras.toFixed(0)} Horas/minutos`
}

export const keysGridSchedule: TableColumn<ISchedule>[] = [
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
            const missing = calculateTimeReal(row)
            return `${row?.dateTime?.toString()} - ${missing}`
        },
    },
]
