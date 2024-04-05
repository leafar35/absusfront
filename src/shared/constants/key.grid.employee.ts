import { TableColumn } from "react-data-table-component"
import { IEmployeeGrid } from "../iemployee.grid"

export const keysGridEmployee: TableColumn<IEmployeeGrid>[] = [
    {
        name: 'Nome',
        selector: row => row.name,
    },
    {
        name: 'Perfil',
        selector: row => row.profile,
    },
    {
        name: 'Email',
        selector: row => row?.email_cellphone,
    },
]