import Api from './Api';

export const getAllCakes = () => {
    return Api.get('/api/cakes');
}

export const getBestSellers = () =>{
    return Api.get('/api/cakes/3');
}