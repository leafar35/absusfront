import { useEffect, useState } from "react"
import { Container } from "./styles"
import Api from "../../services/api"
import { ISchedule } from "../../shared/ischedule";
import BarChartBox from "../../components/Barchart";

export function Dashboard() {
    const [today, setToday] = useState<ISchedule[]>([]);
    const [attend, setAttend] = useState<ISchedule[]>([]);
    const [statistics, setStatistics] = useState([
        {
          "name": "7:30 a 12:00",
          "compareceram": 150,
          "nao_compareceram": 50
        },
        {
          "name": "13:30 a 18:00",
          "compareceram": 120,
          "nao_compareceram": 80
        }
    ])

    useEffect(() => {
        async function notAttend() {
            const { data } = await Api.get('schedule/notAttend/all')
            setAttend(data.data.data)
        }
        async function today() {
            const { data } = await Api.get('schedule/today/all')
            setToday(data.data.data)
        }
        notAttend()
        today()
    },[])

    return (
        <Container>
            <div className="row">
                <div className="col s12 l4">
                    <div className="card recent-buyers-card animate fadeUp">
                        <div className="card-content">
                            <h4 className="card-title mb-0">Não compareceu
                                <i className="material-icons float-right">more_vert</i>
                            </h4>
                            <p className="medium-small pt-2">Hoje</p>
                            <ul className="collection mb-0">
                                {attend ? attend.map(object => 
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">person</i>
                                        <p className="font-weight-600">{object.people?.name}</p>
                                        <p className="medium-small">{object.dateTime.toString()}</p>
                                        <a href="#!" className="secondary-content">
                                            <i className="material-icons">star_border</i>
                                        </a>
                                    </li>
                                ): (
                                    <>
                                        <li>
                                            <i>Nenhuma falta</i>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l8">
                    <div className="card subscriber-list-card animate fadeRight">
                        <div className="card-content pb-1">
                            <h4 className="card-title mb-0">Consultas pendentes <i className="material-icons float-right">more_vert</i></h4>
                        </div>
                        <table className="subscription-table responsive-table highlight">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th className="center-align">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {today ? today.map(object =>                                    
                                    <tr>
                                        <td>{object.people?.name}</td>
                                        <td>{object.people?.user?.email_cellphone}</td>
                                        <td className="center-align">
                                            <a href="#"><i className="material-icons pink-text">clear</i></a>
                                        </td>
                                    </tr>
                                ): (
                                    <tr>
                                        <td colSpan={3}>
                                            <i>Nenhum atendimento pendente</i>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col s12">
                    <BarChartBox data={statistics} />
                </div>
            </div>
        </Container>
    );
}
