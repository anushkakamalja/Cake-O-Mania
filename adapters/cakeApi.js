import Api from './Api';

export const getAllCakes = () => {
    return Api.get('/api/cakes');
};

export const getBestSellers = () => {
    return Api.get('/api/cakes/3');
};

export const addtoCart = (items, total_price) => {
    return Api.post('cart/addtocart', { items, total_price });
};

export const getCart = () => {
    return Api.get('cart/getcart');
};

export const getCake = (id) => {
    return Api.post('api/getcake', { id });
};
