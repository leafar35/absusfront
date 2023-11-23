import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/Schedules';

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/schedules" element={<List />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default AppRoutes;

