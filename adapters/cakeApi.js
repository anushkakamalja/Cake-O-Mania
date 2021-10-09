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
