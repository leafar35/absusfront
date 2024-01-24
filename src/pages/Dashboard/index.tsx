export function Dashboard() {

    return (
        <>
            <div className="row vertical-modern-dashboard">
                <div className="col s12 m4 l4">
                    <div className="card animate fadeLeft">
                        <div className="card-content">
                        <h6 className="mb-0 mt-0 display-flex justify-content-between">Current Balance <i
                                className="material-icons float-right">more_vert</i>
                        </h6>
                        <p className="medium-small">This billing cycle</p>
                        <div className="current-balance-container">
                            <div id="current-balance-donut-chart" className="current-balance-shadow"></div>
                        </div>
                        <h5 className="center-align">$ 50,150.00</h5>
                        <p className="medium-small center-align">Used balance this billing cycle</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 l8 animate fadeRight">
                    <div className="card">
                        <div className="card-content">
                        <h4 className="card-title mb-0">Total Transaction <i className="material-icons float-right">more_vert</i></h4>
                        <p className="medium-small">This month transaction</p>
                        <div className="total-transaction-container">
                            <div id="total-transaction-line-chart" className="total-transaction-shadow"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l5">
                <div className="card user-statistics-card animate fadeLeft">
                    <div className="card-content">
                        <h4 className="card-title mb-0">User Statistics <i className="material-icons float-right">more_vert</i></h4>
                        <div className="row">
                            <div className="col s12 m6">
                            <ul className="collection border-none mb-0">
                                <li className="collection-item avatar">
                                    <i className="material-icons circle pink accent-2">trending_up</i>
                                    <p className="medium-small">This year</p>
                                    <h5 className="mt-0 mb-0">60%</h5>
                                </li>
                            </ul>
                            </div>
                            <div className="col s12 m6">
                            <ul className="collection border-none mb-0">
                                <li className="collection-item avatar">
                                    <i className="material-icons circle purple accent-4">trending_down</i>
                                    <p className="medium-small">Last year</p>
                                    <h5 className="mt-0 mb-0">40%</h5>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="user-statistics-container">
                            <div id="user-statistics-bar-chart" className="user-statistics-shadow ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col s12 l4">
                    <div className="card recent-buyers-card animate fadeUp">
                        <div className="card-content">
                            <h4 className="card-title mb-0">Recent Buyers 
                                <i className="material-icons float-right">more_vert</i>
                            </h4>
                            <p className="medium-small pt-2">Today</p>
                            <ul className="collection mb-0">
                                <li className="collection-item avatar">
                                <img src="./avatar/avatar-7.png" alt="" className="circle" />
                                <p className="font-weight-600">John Doe</p>
                                <p className="medium-small">18, January 2019</p>
                                <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                                <li className="collection-item avatar">
                                <img src="./avatar/avatar-3.png" alt="" className="circle" />
                                <p className="font-weight-600">Adam Garza</p>
                                <p className="medium-small">20, January 2019</p>
                                <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                                <li className="collection-item avatar">
                                <img src="./avatar/avatar-5.png" alt="" className="circle" />
                                <p className="font-weight-600">Jennifer Rice</p>
                                <p className="medium-small">25, January 2019</p>
                                <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col s12 l3">
                    <div className="card animate fadeRight">
                        <div className="card-content">
                            <h4 className="card-title mb-0">Conversion Ratio</h4>
                            <div className="conversion-ration-container mt-8">
                                <div id="conversion-ration-bar-chart" className="conversion-ration-shadow"></div>
                            </div>
                            <p className="medium-small center-align">This month conversion ratio</p>
                            <h5 className="center-align mb-0 mt-0">62%</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card padding-4 animate fadeLeft">
                        <div className="row">
                        <div className="col s5 m5">
                            <h5 className="mb-0">1885</h5>
                            <p className="no-margin">New</p>
                            <p className="mb-0 pt-8">1,12,900</p>
                        </div>
                        <div className="col s7 m7 right-align">
                            <i
                                className="material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text">perm_identity</i>
                            <p className="mb-0">Total Clients</p>
                        </div>
                        </div>
                    </div>
                    <div id="chartjs" className="card pt-0 pb-0 animate fadeLeft">
                        <div className="dashboard-revenue-wrapper padding-2 ml-2">
                        <span className="new badge gradient-45deg-indigo-purple gradient-shadow mt-2 mr-2">+ $900</span>
                        <p className="mt-2 mb-0 font-weight-600">Today's revenue</p>
                        <p className="no-margin grey-text lighten-3">$40,512 avg</p>
                        <h5>$ 22,300</h5>
                        </div>
                        <div className="sample-chart-wrapper card-gradient-chart">
                        <canvas id="custom-line-chart-sample-three" className="center"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l8">
                    <div className="card subscriber-list-card animate fadeRight">
                        <div className="card-content pb-1">
                        <h4 className="card-title mb-0">Subscriber List <i className="material-icons float-right">more_vert</i></h4>
                        </div>
                        <table className="subscription-table responsive-table highlight">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Start Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Michael Austin</td>
                                <td>ABC Fintech LTD.</td>
                                <td>Jan 1,2019</td>
                                <td><span className="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                                <td>$ 1000.00</td>
                                <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                            </tr>
                            <tr>
                                <td>Aldin Rakić</td>
                                <td>ACME Pvt LTD.</td>
                                <td>Jan 10,2019</td>
                                <td><span className="badge green lighten-5 green-text text-accent-4">Open</span></td>
                                <td>$ 3000.00</td>
                                <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                            </tr>
                            <tr>
                                <td>İris Yılmaz</td>
                                <td>Collboy Tech LTD.</td>
                                <td>Jan 12,2019</td>
                                <td><span className="badge green lighten-5 green-text text-accent-4">Open</span></td>
                                <td>$ 2000.00</td>
                                <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                            </tr>
                            <tr>
                                <td>Lidia Livescu</td>
                                <td>My Fintech LTD.</td>
                                <td>Jan 14,2019</td>
                                <td><span className="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                                <td>$ 1100.00</td>
                                <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}