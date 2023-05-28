import { v4 as uuidv4 } from 'uuid';

// Initial state object
const INITIAL_STATE = {
    products: [],
}

// const PRODUCTS = [
//     {
//         id: uuidv4(),
//         text: 'iPhone',
//         isFavorite: true,
//         category: 'Mobile',
//         price: 1900,
//     },
//     {
//         id: uuidv4(),
//         text: 'Macbook Pro',
//         isFavorite: false,
//         category: 'Laptop',
//         price: 2900,
//     },
//     {
//         id: uuidv4(),
//         text: 'Nike',
//         isFavorite: false,
//         category: 'Clothing',
//         price: 299,
//     },
// ];

function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'products/LOAD_PRODUCTS':
            return {
                ...state,
                products: state.products.length === 0 ? [] : state.products,
            };
        case 'products/ADD_PRODUCTS':
            const {title, price, category} = action.payload;
            const newProduct = {
                text: title,
                price,
                category,
                id: uuidv4(),
                isFavorite: false,
            };
            return {
                ...state,
                products: [...state.products, newProduct]
            }
    
        default:
            return state
    }
}

export default productsReducer;