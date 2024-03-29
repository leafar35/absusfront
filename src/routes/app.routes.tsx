import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Layout from '../components/Layout';
import { Dashboard } from '../pages/Dashboard';
import CreatePatient from '../pages/Patients/Create';
import UpdatePatient from '../pages/Patients/Update';
import List from '../pages/Schedules';
import CreateSchedule from '../pages/Schedules/create';
import Updatechedule from '../pages/Schedules/update';
import { Patients } from '../pages/Patients';
import { DefaultLayout } from '../layouts/DefaultLayout';
import Employee from '../pages/employee';
import CreateEmployee from '../pages/employee/Create';
import UpdateEmployee from '../pages/employee/Update';
import { CalendarPage } from '../pages/Calendar';
import { Users } from '../pages/Users';

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/employees/create" element={<CreateEmployee />} />
                    <Route path="/employees/update/:id" element={<UpdateEmployee />} />
                    <Route path="/schedules" element={<List />} />
                    <Route path="/schedules/create" element={<CreateSchedule />} />
                    <Route path="/schedules/update/:id" element={<Updatechedule />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/patients/create" element={<CreatePatient />} />
                    <Route path="/patients/update/:id" element={<UpdatePatient />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/calendary" element={<CalendarPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

