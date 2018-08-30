import R from 'ramda';


const initialState = {
    ids: [],
    search: ''
};

export default (state = initialState,action)=>{
    switch(action.type){
        case 'FETCH_PHONE_SUCCESS':
            return(
                R.merge(state,{
                    ids: R.pluck('id',action.payload)
                })
            );
        case 'LOAD_MORE_SUCCESS' :
        {
            const ids = R.pluck('id',action.payload);
            return R.merge(state,{
                ids: R.concat(ids,state.ids)
            });
        }
        case 'SEARCH_PHONE' :
        {   console.log("text to be searched is " , action.payload);
            return R.merge(state, {
                search: action.payload
            });
        }
        default:
            return state;
    }
};