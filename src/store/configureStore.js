import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import phoneReducer from '../reducers/phone';
import PhonesPage from '../reducers/PhonesPage';
import PhonePage from '../reducers/PhonePage';
import {routerReducer} from 'react-router-redux';
import Basket from '../reducers/Basket';
import Categories from '../reducers/Categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            routing:routerReducer,
            phone: phoneReducer,
            PhonesPage: PhonesPage,
            PhonePage: PhonePage,
            Basket:Basket,
            Categories: Categories
        }),composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};