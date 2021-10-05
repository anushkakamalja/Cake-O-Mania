import React from 'react';
import { useRouter } from 'next/router';
import links from '../link';
import PageLoader from '../components/PageLoader';
import { useAuth } from '../contexts/AuthContext';
const WithAuth = (Component) => {
    const WithAuthComponent = () => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        React.useEffect(() => {
            if (!isAuthenticated) {
                alert('Login to view that page');
                router.push(links.login);
            }
        }, [isAuthenticated]);
        if (!isAuthenticated) return <PageLoader />;
        else return <Component />;
    };
    return WithAuthComponent;
};

export default WithAuth;
