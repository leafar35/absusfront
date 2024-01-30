import { useEffect, useState } from "react";
import { IUserEntity } from "../../shared/iuser";
import Api from "../../services/api";
import { GridUser } from "../../components/GridUser";

export function Users() {
    const [data, setData] = useState<IUserEntity[]>([]);

    useEffect(() => {
        async function getUsers() {
            const response = await Api.get('user')
            setData(response.data)
        }
        getUsers()
    })

    return (
        <>
            <div className="section">
                <div className="card">
                    <div className="card-content">
                    <p className="caption mb-0">Tables are a nice way to organize a lot of data. We provide a few utility classes to help
                        you style your table as easily as possible. In addition, to improve mobile experience, all tables on
                        mobile-screen widths are centered automatically.</p>
                    </div>
                </div>
                <GridUser data={data} />
            </div>
        </>
    );
}