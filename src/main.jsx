/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './components/context/AuthProvider';
import './index.css';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
    </AuthProvider>
);
