import { useRouter } from 'next/router';
import React from 'react';
import PageLoader from '../../../../../components/PageLoader';
// import useKeyValPairFromUrlHash from '../../../../../hooks/useKeyValPairFromUrlHash';
import link from '../../../../../link';

const Failed = () => {
    const router = useRouter();
    // const { message } = useKeyValPairFromUrlHash(router.asPath);
    React.useEffect(() => {
        router.push(link.home);
    }, []);
    return <PageLoader />;
};

export default Failed;
