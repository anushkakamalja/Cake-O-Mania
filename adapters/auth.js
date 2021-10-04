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
