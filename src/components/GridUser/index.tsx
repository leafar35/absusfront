import { Link } from "react-router-dom";
import { IUserEntity } from "../../shared/iuser";
interface IData{
    data: Array<IUserEntity>
}

export function GridUser({data}: IData){
    return (
        <div className="row">
            <div className="col s12">
                <div id="borderless-table" className="card card-tabs">
                    <div className="card-content">
                        <div className="card-title">
                            <div className="row">
                                <div className="col s12 m6 l10">
                                    <h4 className="card-title">Listagem de Usuários</h4>
                                </div>
                            </div>
                        </div>
                        <div id="view-borderless-table" className="active">
                            <div className="row">
                                <div className="col s12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Numero/E-mail</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(value => (
                                                <tr>
                                                    <td>{value.email_cellphone}</td>
                                                    <td>
                                                        <Link to={'update/'+value.id}>
                                                            <i className="material-icons">edit</i>
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