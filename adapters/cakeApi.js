import Api from './Api';

export const getAllCakes = () => {
    return Api.get('/api/cakes');
};

export const getBestSellers = () => {
    return Api.get('/api/cakes/3');
};

export const addtoCart = (items, user, total_price) => {
    return Api.post('cart/addtocart', { items, user, total_price });
};

export const getCart = (user) => {
    return Api.get(`cart/getcart/${user}`);
};

export const getCake = (id) => {
    return Api.get(`api/cake/${id}`);
};

export const getuser = (user) => {
    return Api.get(`/users/getuser/${user}`);
};

export const getCartTotal =(user)=>{
    return Api.get(`/cart/gettotal/${user}`)
}