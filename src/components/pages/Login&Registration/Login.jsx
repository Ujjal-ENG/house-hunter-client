/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './styles.css';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoading(true);
        try {
            navigate(from, { replace: true });
            toast.success('User is Logged in Successfully!!!');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('There was an error while signIn user!!');
        }
    };
    const handleGoogleSignIn = async () => {
        setLoading(true);
        const role = 'user';
        try {
            navigate(from, { replace: true });
            toast.success('Successfully Logged In');

            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('There was an error while signIn user!!');
            setLoading(false);
        }
    };

    return (
        <section className="bg-white container h-screen">
            <div className="grid grid-cols-1  lg:grid-cols-2">
                <div data-aos="fade-right" className="flex justify-center container shadow-2xl max-w-2xl mx-auto items-center">
                    <img src="https://images.pexels.com/photos/3584967/pexels-photo-3584967.jpeg?auto=compress&cs=tinysrgb&w=600" alt="login-img" />
                </div>
                <div data-aos="fade-left" className="flex items-center container  justify-center px-4 py-10 bg-white ">
                    <div className="container shadow-2xl py-5 max-w-4xl">
                        <div className="mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to Celebration</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don't have an account?
                                <Link to="/register" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                                    Sign Up
                                </Link>
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email to get started"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                required
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        {loading ? (
                                            <div className="w-full flex justify-center items-center">
                                                <span className="loading loading-spinner loading-md" />
                                            </div>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80">
                                                Log In
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>

                            <p className="mt-5 text-sm text-gray-600">
                                This site is protected by reCAPTCHA and the Google
                                <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                                    Privacy Policy
                                </a>
                                &
                                <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                                    Terms of Service
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
