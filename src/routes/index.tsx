import { useContext } from 'react';
import App from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthContext } from '../contexts/AuthContext';
import RegionRoute from './regtion.choice';

export function Routes() {
    const { logged, region } = useContext(AuthContext);
    if(!region) {
        return (
            <RegionRoute />
        )
    }
    return (
        (logged) ? <App /> : <AuthRoutes />
    )
};

export default Routes;