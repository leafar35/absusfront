import { useLocation } from "react-router-dom"
import Translate from "../../utils/translate"
export interface IBreadData {
    router: string
    labelName: string
}

export function BreadCrumb(){
    let Bread: Array<IBreadData> = []
    const location = useLocation()
    location.pathname.split('/').map((value) => {
        if(value.trim()){
            Bread.push({
                router: '/'+value,
                labelName: value
            })
        }
    })
    Bread.unshift({
        router: '/',
        labelName: 'Home'
    })
    return (
        <>
            <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s10 m6 l6">
                            <h5 className="breadcrumbs-title mt-0 mb-0">
                                {Bread[1] && (<span>{Translate(Bread[1].labelName)}</span>)}                                
                            </h5>
                            <ol className="breadcrumbs mb-0">
                                {Bread.map(value => (
                                    <li className="breadcrumb-item">
                                        <a href={value.router}>{Translate(value.labelName)}</a>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
