export function Dashboard() {

    return (
        <>
            <div className="row">
                <div className="col s12 l4">
                    <div className="card recent-buyers-card animate fadeUp">
                        <div className="card-content">
                            <h4 className="card-title mb-0">Atendimentos recentes 
                                <i className="material-icons float-right">more_vert</i>
                            </h4>
                            <p className="medium-small pt-2">Hoje</p>
                            <ul className="collection mb-0">
                                <li className="collection-item avatar">
                                    <img src="./avatar/avatar-7.png" alt="" className="circle" />
                                    <p className="font-weight-600">John Doe</p>
                                    <p className="medium-small">18:45:20</p>
                                    <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                                <li className="collection-item avatar">
                                    <img src="./avatar/avatar-3.png" alt="" className="circle" />
                                    <p className="font-weight-600">Adam Garza</p>
                                    <p className="medium-small">14:50:20</p>
                                    <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                                <li className="collection-item avatar">
                                    <img src="./avatar/avatar-5.png" alt="" className="circle" />
                                    <p className="font-weight-600">Jennifer Rice</p>
                                    <p className="medium-small">15:20:30</p>
                                    <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l8">
                    <div className="card subscriber-list-card animate fadeRight">
                        <div className="card-content pb-1">
                            <h4 className="card-title mb-0">Atendimentos do dia <i className="material-icons float-right">more_vert</i></h4>
                        </div>
                        <table className="subscription-table responsive-table highlight">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Telefone</th>
                                    <th>Finalizado</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Michael Austin</td>
                                    <td>49999984135</td>
                                    <td>13:45:50</td>
                                    <td className="center-align">
                                        <a href="#"><i className="material-icons pink-text">clear</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aldin Rakić</td>
                                    <td>49999984135</td>
                                    <td>13:45:50</td>
                                    <td className="center-align">
                                        <a href="#"><i className="material-icons pink-text">clear</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>İris Yılmaz</td>
                                    <td>49999984135</td>
                                    <td>13:45:50</td>
                                    <td className="center-align">
                                        <a href="#"><i className="material-icons pink-text">clear</i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}