/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { ViewBorderlessTable, DataTableCustom } from "./styled";
import { IPagination } from "../../shared/ipagination";
import { useState } from "react";
import { TableColumn } from "react-data-table-component";

interface IData{
    data: IPagination,
    columns: TableColumn<any>[]
    fetchData: (event?: any, page?: number, perPage?: number) => Promise<void>
    title?: string
}

export function Grid({data, columns, fetchData, title = 'Listagem de Funcionários'}: IData){
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const handlePageChange = (page: number) => {
        setPage(page)
        fetchData(null, page, perPage)
    }
    const handleRowsPerPageChange = (perPage: number) => {
        setPerPage(perPage)
        fetchData(null, page, perPage)
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
                                    <h4 className="card-title">{title}</h4>
                                </div>
                            </div>
                        </div>
                        <ViewBorderlessTable className="active">
                            <div className="row">
                                <div className="col s12">
                                    <DataTableCustom
                                        columns={columns}
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