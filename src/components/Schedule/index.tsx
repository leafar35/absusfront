import { Link } from "react-router-dom";
import { ISchedule } from "../../shared/ischedule";
interface IData{
    data: Array<ISchedule>
}

export function Schedule({data}: IData){
    return (
        <div className="row">
            <div className="col s12">
                <div id="borderless-table" className="card card-tabs">
                    <div className="card-content">
                        <div className="card-title">
                            <div className="row">
                                <div className="col s12 m6 l10">
                                    <h4 className="card-title">Agendamentos</h4>
                                </div>
                            </div>
                        </div>
                        <div id="view-borderless-table" className="active">
                            <div className="row">
                                <div className="col s12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Titulo</th>
                                                <th>Tipo</th>
                                                <th>Data do agendamento</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.length !== 0 ? (
                                                data.map(value => (
                                                    <tr>
                                                        <td>{value.title}</td>
                                                        <td>{value.description}</td>
                                                        <td>{value.dateTime?.toString()}</td>
                                                        <td>
                                                            <Link to={'update/'+value.id}>
                                                                <i className="material-icons">edit</i>
                                                            </Link>
                                                            <Link to={'delete/'+value.id}>
                                                                <i className="material-icons">delete</i>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))
                                                ): <><tr><td colSpan={4}>Nenhum Agendamento</td></tr></>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}