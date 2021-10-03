import { useRouter } from 'next/router';
import React from 'react';
import PageLoader from '../../../../../components/PageLoader';
import useKeyValPairFromUrlHash from '../../../../../hooks/useKeyValPairFromUrlHash';
import useLocalStorage from '../../../../../hooks/useLocalStorage';

const Success = () => {
    const router = useRouter();
    const { token } = useKeyValPairFromUrlHash(router.asPath);
    const [, setToken] = useLocalStorage('token', '');
    React.useEffect(() => {
        setToken(token);
    }, []);
    return <PageLoader />;
};

export default Success;
