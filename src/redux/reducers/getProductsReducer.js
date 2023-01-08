import * as actionTypes from '../constants/productConstant';


export const getProductsReducer = (state = { products: [] }, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}