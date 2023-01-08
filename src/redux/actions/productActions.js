import axios from 'axios';
import * as actionTypes from '../constants/productConstant';
const URL = 'http://localhost:8000'

export const getProducts = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${URL}/products`);
        console.log('response: ', data);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message })
    }
}