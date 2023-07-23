/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/layouts/DashboardLayout/DashboardLayout';
import Home from '../components/pages/HomePage/Home';
import AddNewHouse from '../components/pages/HouseOwnerDashboard/AddNewHouse';
import Login from '../components/pages/Login&Registration/Login';
import Register from '../components/pages/Login&Registration/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 'add-new-house',
                        element: <AddNewHouse />
                    }
                ]
            }
        ]
    }
]);
