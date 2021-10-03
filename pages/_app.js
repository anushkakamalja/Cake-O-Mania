import '../styles/tailwind.css';
import AuthProvider from '../contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <AuthProvider> */}
            <Component {...pageProps} />
            {/* </AuthProvider> */}
        </QueryClientProvider>
    );
}

export default MyApp;
