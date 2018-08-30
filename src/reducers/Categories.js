import R from 'ramda';


const initialState = {
    
};

export default (state = initialState,action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIES_SUCCESS':
            const newVal = R.indexBy(R.prop('id'), action.payload);
            return(
                R.merge(state,newVal)
            );
       
        default:
            return state;
    }
};