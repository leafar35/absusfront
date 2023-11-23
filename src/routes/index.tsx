import React from 'react';
import App from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    
    return (
        (true) ? <App /> : <AuthRoutes />
    )
};

export default Routes;