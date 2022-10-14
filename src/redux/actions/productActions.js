import { ActionTypes } from '../constants/action-types';
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
        const response = await fakeStoreApi.get('/products');
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        })
    }

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}
