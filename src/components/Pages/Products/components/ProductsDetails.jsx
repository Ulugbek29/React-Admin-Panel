import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../../services/postServies";
import Loader from "../../../common/Loader";

export default function ProductsDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  // useEffect(()=> {
  //     fetchProduct(params.id)
  //     .then((product) => {
  //         console.log(product)
  //     }).catch((err) => {
  //         console.log("Products-detail", err)
  //     });
  // },[])

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((productObj) => {
        setProductDetails(productObj.data);
      })
      .catch((err) => {
        console.log("ProductsDetails", err);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(params);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {productDetails.title}
            <img
              className="w-[300px] h-[300px] object-cover"
              src={productDetails.thumbnail}
            />
          </div>
          <div className="flex flex-col gap-4">
            <span>brand: {productDetails.brand}</span>
            <span>
              discountPercentage: {productDetails.discountPercentage}%
            </span>
            <span>price: {productDetails.price}</span>
            <span>stock: {productDetails.stock}</span>
            <span>category: {productDetails.category}</span>
          </div>
        </div>
      )}
    </>
  );
}
