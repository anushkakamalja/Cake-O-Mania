import { useRouter } from 'next/router';
import React from 'react';
import PageLoader from '../../../../../components/PageLoader';
import createPersistedState from 'use-persisted-state';
import useKeyValPairFromUrlHash from '../../../../../hooks/useKeyValPairFromUrlHash';

const useTokenState = createPersistedState('token');

const Success = () => {
    const router = useRouter();
    const { token } = useKeyValPairFromUrlHash(router.asPath);
    const [, setToken] = useTokenState('');
    React.useEffect(() => {
        setToken(token);
    }, []);
    return <PageLoader />;
};

export default Success;
