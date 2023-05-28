import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import productsReducer from './product';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
    products: productsReducer,
})

const persistedStorageItems = localStorage.getItem('APP_PRODUCTS');
let preloadedState;
if (persistedStorageItems) {
    preloadedState = {
        products: {
            products: JSON.parse(persistedStorageItems),
        }
    };
}

// create the store
const store = createStore(
    rootReducer,
    preloadedState, 
    composeWithDevTools()
);
export default store;