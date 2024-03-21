import { TableColumn } from "react-data-table-component"
import { ISchedule } from "../ischedule"

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
        selector: row => row?.dateTime?.toString(),
    },
]