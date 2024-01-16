import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import CreatePatient from '../pages/Patients/Create';
import UpdatePatient from '../pages/Patients/Update';
import List from '../pages/Schedules';
import CreateSchedule from '../pages/Schedules/create';
import Updatechedule from '../pages/Schedules/update';
import { Patients } from '../pages/Patients';
import { DefaultLayout } from '../layouts/DefaultLayout';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="/schedules" element={<List />} />
                    <Route path="/schedules/create" element={<CreateSchedule />} />
                    <Route path="/schedules/update/:id" element={<Updatechedule />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/patients/create" element={<CreatePatient />} />
                    <Route path="/patients/update/:id" element={<UpdatePatient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

