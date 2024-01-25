import { Link } from "react-router-dom";
import { IPeople } from "../../shared/IPeople";
interface IData{
    data: Array<IPeople>
}

export function Grid({data}: IData){
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
                        <div id="view-borderless-table" className="active">
                            <div className="row">
                                <div className="col s12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Data de Nascimento</th>
                                                <th>Numero/E-mail</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(value => (
                                                <tr>
                                                    <td>{value.name}</td>
                                                    <td>{value.dateofbirth?.toString()}</td>
                                                    <td>{value.user.email_cellphone}</td>
                                                    <td>
                                                        <Link to={'update/'+value.id}>
                                                            <i className="material-icons">edit</i>
                                                        </Link>
                                                        <Link to={'delete/'+value.id}>
                                                            <i className="material-icons">delete</i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
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