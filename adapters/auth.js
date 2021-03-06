import Api from './Api';

export const checkAuthWithServer = () => {
    return Api.get('auth/verify');
};

export const logout = () => {
    return Api.get('auth/logout');
};

export const login = (email, password) => {
    return Api.post('auth/login', { email, password });
};

export const signUp = (email, password, firstName, lastName, mobileNo) => {
    return Api.post('auth/signup', { email, password, firstName, lastName, mobileNo });
};

export const verifyEmail = (token) => {
    return Api.post('auth/email/verify', { token });
};

export const sendResetPasswordEmail = (email) => {
    return Api.post('auth/password/reset/email', { email });
};

export const resetPassword = (token, password) => {
    return Api.post('auth/password/reset/change', {
        token,
        password
    });
};

export const getNewToken = async () => {
    try {
        const res = await Api.get('auth/refresh_token');
        return res.data.token;
    } catch (error) {
        return '';
    }
};


