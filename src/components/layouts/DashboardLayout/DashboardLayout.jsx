/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [role, setRole] = useState([]);
    const isAdmin = true;
    useEffect(() => {
        axios.get('http://localhost:8080/users').then(({ data }) => {
            setRole(data.data);
        });
    }, []);
    console.log(role);
    return (
        <div className="grid grid-cols-3">
            <div className="drawer col-span-1  drawer-mobile">
                {isAdmin ? (
                    <div className="col-span-1 h-[90vh] sticky bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                        <h1 className="text-4xl tracking-wider font-bold text-center text-gray-500">House Owner Dashboard</h1>
                        <ul className="menu bg-base-200 rounded-box text-xl font-bold tracking-wide">
                            <li>
                                <Link to="manage-users">Manage House and Bookings</Link>
                            </li>
                            <li>
                                <Link to="dashboard/manage-bookings">Manage Bookings</Link>
                            </li>
                            <li>
                                <Link to="dashboard/add-new-house">Add New House</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="col-span-1 h-[90vh] sticky bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                        <h1 className="text-4xl tracking-wider font-bold text-gray-500">User Dashboard</h1>
                        <ul className="menu bg-base-200 w-72 rounded-box text-xl font-bold tracking-wide">
                            <li>
                                <Link to="dashboard/selected-bookings">Selected Booking</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
