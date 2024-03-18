import DataTable from 'react-data-table-component';
import styled from 'styled-components';
//import '../../../node_modules/datatables.net-dt/css/dataTables.dataTables.min.css'

export const ViewBorderlessTable = styled.div`
    > * {
        box-shadow: none !important;
    }
    nav{
        box-shadow: none !important;
    }
    select{
        display: block !important;
        padding: 4px;
    }

`
export const DataTableCustom = styled(DataTable)`
    nav: {
        box-shadow: none !important;
    }
    select: {
        display: block !important;
    }

`