import { useRouter } from 'next/router';
import React from 'react';
import PageLoader from '../../../../../components/PageLoader';
import createPersistedState from 'use-persisted-state';
import useKeyValPairFromUrlHash from '../../../../../hooks/useKeyValPairFromUrlHash';
import link from '../../../../../link';
const useTokenState = createPersistedState('token');

const Success = () => {
    const router = useRouter();
    const { token } = useKeyValPairFromUrlHash(router.asPath);
    const [, setToken] = useTokenState('');
    React.useEffect(() => {
        setToken(token);
        router.push(link.home);
    }, []);
    return <PageLoader />;
};

export default Success;
