import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Rectangle } from 'recharts';

interface IBarcharBoxProps {
    data: unknown[],
}

const BarChartBox: React.FC<IBarcharBoxProps> = ({
    data
}) => {
    return (
        <>
            <div className="card user-statistics-card animate">
                <div className="card-content">
                    <h4 className="card-title mb-0">Statisticas do Dia <i className="material-icons float-right">more_vert</i></h4>
                    <div className="row">
                        <div className="col s12 m6">
                            <ul className="collection border-none mb-0">
                                <li className="collection-item avatar">
                                <i className="material-icons circle pink accent-2">trending_up</i>
                                <p className="medium-small">Não compareceu</p>
                                <h5 className="mt-0 mb-0">60%</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <ul className="collection border-none mb-0">
                                <li className="collection-item avatar">
                                <i className="material-icons circle purple accent-4">trending_down</i>
                                <p className="medium-small">Compareceu</p>
                                <h5 className="mt-0 mb-0">40%</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-statistics-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarChartBox;