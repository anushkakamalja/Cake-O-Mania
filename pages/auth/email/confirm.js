import React from 'react';
import link from '../../../link';
import { useRouter } from 'next/router';
import PageLoader from '../../../components/PageLoader';
import useKeyValPairFromUrlHash from '../../../hooks/useKeyValPairFromUrlHash';
import { verifyEmail } from '../../../adapters/auth';
import { useMutation } from 'react-query';

const verifyEmailWrapper = async (token) => (await verifyEmail(token)).data;

const ConfirmEmail = () => {
    const router = useRouter();
    const { token } = useKeyValPairFromUrlHash(router.asPath);
    const mutation = useMutation(verifyEmailWrapper, {
        retry: false,
        onSuccess: async (data) => {
            alert(data.message);
            await router.push(link.home);
        },
        onError: async (error) => {
            alert(error?.response.data.message);
            await router.push(link.home);
        }
    });
    React.useEffect(() => {
        mutation.mutate(token);
    }, []);
    return <PageLoader />;
};

export default ConfirmEmail;
