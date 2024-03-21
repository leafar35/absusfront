import { TableColumn } from "react-data-table-component"
import { IPeople } from "../IPeople"

export const keysGrid: TableColumn<IPeople>[] = [
    {
        name: 'Nome',
        selector: row => row.name,
    },
    {
        name: 'Data de Nascimento',
        selector: row => row?.dateofbirth?.toString(),
    },
    {
        name: 'Email',
        selector: row => row?.user.email_cellphone,
    },
]