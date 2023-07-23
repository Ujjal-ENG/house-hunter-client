/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    return <AuthContext.Provider value={[userInfo, setUserInfo]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
