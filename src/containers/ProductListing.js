import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
