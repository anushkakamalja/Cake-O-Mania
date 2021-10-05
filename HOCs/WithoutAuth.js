import React from 'react';
import { useRouter } from 'next/router';
import links from '../link';
import PageLoader from '../components/PageLoader';
import { useAuth } from '../contexts/AuthContext';

const WithOutAuth = (Component) => {
    const WithOutAuthComponent = () => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        React.useEffect(() => {
            if (isAuthenticated) {
                router.push(links.home);
            }
        }, [isAuthenticated]);
        if (isAuthenticated) return <PageLoader />;
        else return <Component />;
    };
    return WithOutAuthComponent;
};

export default WithOutAuth;
