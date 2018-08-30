import {fetchPhones as fetchPhonesApi,
        loadMore as loadMoreApi,
        fetchPhoneById as fetchPhoneByIdApi,
        fetchCategories  as fetchCategoriesApi}  from '../api/fetchPhones';
import {getRenderedPhonesLength} from '../selectors/Phones';

export const fetchPhones = ()=>{
    
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_PHONE_START'
            });
            const phones = await fetchPhonesApi();
            dispatch({
                type: 'FETCH_PHONE_SUCCESS',
                payload: phones
            });
        }catch(err){
            dispatch({
                type: 'FETCH_PHONE_FAIL',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchCategories = ()=>{
    
    return async (dispatch,getState)=>{
        // console.log("Fetching entire state ", getState());
        try{
            dispatch({
                type: 'FETCH_CATEGORIES_START'
            });
            const categories = await fetchCategoriesApi();
            dispatch({
                type: 'FETCH_CATEGORIES_SUCCESS',
                payload: categories
            });
        }catch(err){
            dispatch({
                type: 'FETCH_CATEGORIES_FAILURE',
                payload: err,
                error: true
            });
        };
    };
}; 

export const loadMore = ()=>{
    
    return async (dispatch,getState) => {
        const offset = getRenderedPhonesLength(getState());
        try{
            dispatch({
                type: 'LOAD_MORE_START'
            });
            const phones = await loadMoreApi({offset});
            dispatch({
                type: 'LOAD_MORE_SUCCESS',
                payload: phones
            });
        }catch(err){
            dispatch({
                type: 'LOAD_MORE_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchPhoneById = id=>{
    return async (dispatch,getState) => {
        const offset = getRenderedPhonesLength(getState());
        try{
            dispatch({
                type: 'FETCH_PHONE_BY_ID_START'
            });
            const phone = await fetchPhoneByIdApi(id);
            dispatch({
                type: 'FETCH_PHONE_BY_ID_SUCCESS',
                payload: phone
            });
        }catch(err){
            dispatch({
                type: 'FETCH_PHONE_BY_ID_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const addPhoneToBasket = id => dispatch => {
    dispatch({
        type: 'ADD_PHONE_TO_BASKET',
        payload: id
    });
};

export const searchPhone = text => dispatch =>{
    console.log("searching ", text);
    dispatch({
        type: 'SEARCH_PHONE',
        payload: text
    })};

export const removePhoneFromBasket = (id)=> async dispatch =>{
    dispatch({
        type: 'REMOVE_PHONE_FROM_BASKET',
        payload: id
    });
};   

export const cleanBasket = ()=>dispatch => {
    dispatch({
        type: 'CLEAN_BASKET'
    });
};

export const basketCheckout = (phones)=> () =>{
    alert(JSON.stringify(phones));
};