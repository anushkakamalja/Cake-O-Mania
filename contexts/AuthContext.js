import React from 'react';
import Api from '../adapters/Api';
import { checkAuthWithServer, getNewToken } from '../adapters/auth';
import { useQuery } from 'react-query';
import PageLoader from '../components/PageLoader';
import createPersistedState from 'use-persisted-state';
import useInterval from '../hooks/useInterval';

const useTokenState = createPersistedState('token');
const AuthContext = React.createContext(undefined);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useTokenState('');
    Api.defaults.headers.Authorization = `Bearer ${token}`;
    const { isLoading, isError, data } = useQuery(['checkAuth', token], checkAuthWithServer, {
        retry: false,
        staleTime: 10 * 60 * 1000
    });
    useInterval(async () => {
        setToken(await getNewToken());
    }, 10 * 60 * 1000);
    if (isLoading) return <PageLoader />;
    if (isError) {
        return (
            <AuthContext.Provider value={{ user: null, isAuthenticated: false }}>
                {children}
            </AuthContext.Provider>
        );
    }
    const { data: authData } = data;
    const value = {
        user: {
            email: authData.email,
            firstName: authData.firstName,
            lastName: authData.lastName
        },
        isAuthenticated: true
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export default AuthProvider;
export { useAuth };
