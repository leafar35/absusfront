import { useContext } from 'react';
import App from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthContext } from '../contexts/AuthContext';

export function Routes() {
    const { logged } = useContext(AuthContext);
    return (
        (logged) ? <App /> : <AuthRoutes />
    )
};

export default Routes;