import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = () => {
    return <div>AuthProvider</div>;
};

export default AuthProvider;
