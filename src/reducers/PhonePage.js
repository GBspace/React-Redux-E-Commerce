import R from 'ramda';

const intialState = {
    id: null
};

export default (state=intialState,action) =>{
    switch(action.type){
        case 'FETCH_PHONE_BY_ID_SUCCESS':
            return R.merge(state,{
                id: R.prop('id',action.payload)
            });
        default:
            return state;
    }};