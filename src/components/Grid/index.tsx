/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { Link } from "react-router-dom";
import { IPeople } from "../../shared/IPeople";
import { TableColumn } from "react-data-table-component";
import { ViewBorderlessTable, DataTableCustom } from "./styled";
import { IPagination } from "../../shared/ipagination";

interface IData{
    data: IPagination,
    onclick: (id: number | undefined) => Promise<void>
    fetchData: (page?: number, perPage?: number) => Promise<void>
}

export function Grid({data, onclick, fetchData}: IData){
    const keys: TableColumn<IPeople>[] = [
        {
            name: 'name',
            selector: row => row.name,
        },
        {
            name: 'dateofbirth',
            selector: row => row?.dateofbirth?.toString(),
        },
        {
            name: 'user.email_cellphone',
            selector: row => row?.user.email_cellphone,
        },
        {
            name: '#',
            cell(row) {
                const id = (row?.id) ? row.id : undefined
                return (
                    <>
                        <Link to={'update/'+id}>
                            <i className="material-icons">edit</i>
                        </Link>
                        <a href='javascript:void(0)' onClick={() => onclick(id)}>
                            <i className="material-icons">delete</i>
                        </a>
                    </>
                )
            },
        },
    ]
    const handlePageChange = (page: number) => {
        fetchData(page)
    }
    const handleRowsPerPageChange = (perPage: number) => {
        fetchData(undefined, perPage)
    }
    const paginationComponentOptions = {
        rowsPerPageText: 'por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    return (
        <div className="row">
            <div className="col s12">
                <div id="borderless-table" className="card card-tabs">
                    <div className="card-content">
                        <div className="card-title">
                            <div className="row">
                                <div className="col s12 m6 l10">
                                    <h4 className="card-title">Listagem de Funcionários</h4>
                                </div>
                            </div>
                        </div>
                        <ViewBorderlessTable className="active">
                            <div className="row">
                                <div className="col s12">
                                    <DataTableCustom
                                        columns={keys}
                                        data={data.data}
                                        pagination
                                        paginationServer
                                        onChangePage={handlePageChange}
                                        onChangeRowsPerPage={handleRowsPerPageChange}
                                        paginationTotalRows={data.totalRows}
                                        paginationPerPage={data.perPage || 10}
                                        paginationRowsPerPageOptions={[10,20,30,50,100]}
                                        paginationComponentOptions={paginationComponentOptions}
                                    />
                                </div>
                            </div>
                        </ViewBorderlessTable>
                    </div>
                </div>
            </div>
        </div>
    )
}