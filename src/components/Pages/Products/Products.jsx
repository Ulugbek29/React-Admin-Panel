import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Product from "./components/Product";
import Loader from "../../common/Loader";
import { fetchProducts } from "../../../services/postServies";
import InfiniteScroll from "react-infinite-scroll-component";

const API_BASE = "https://dummyjson.com/products";

export default function Products() {
  let initialLimit = 10;
  //Products
  const [products, setProducts] = useState([]);
  //Search Input  Products
  const [searchProduct, setSearchProduct] = useState("");

  // Select Category
  const [options, setOptions] = useState([]);
  
  //Loader
  const [loading, setLoading] = useState(false);

  //Infinite Scroll
  const [hasMore, setHasMore] = useState(true)
  const [limit, setLimit] = useState(10);








  // Responsible for rendering the data
  useEffect(() => {
    if (!products) {
      return;
    }
    fetchData(limit);
  }, [limit]); // error

  // Responsible for rendering searched data
  useEffect(() => {
    searchData(searchProduct);
  }, [searchProduct]);

  // Responsible for rendering all Categories
  useEffect(() => {
    getAllCategories();
  }, []);

  // Gets all data from api
  const fetchData = (limit = initialLimit) => {
    console.log(limit);
    setLoading(true);
    
      axios
        .get(`${API_BASE}?limit=${limit}&skip=0`)
        .then((res) => {
          if(products.length === res.data.total) {
            setHasMore(false)
            return
          }
          setProducts(res.data.products);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
  };

  console.log(products);
  // Searchs product by getting from input value
  const searchData = (value) => {
    setLoading(true);
    axios
      .get(`${API_BASE}/search?q=${value}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Getting all categories from the appi
  const getAllCategories = () => {
    axios
      .get(`${API_BASE}/categories`)
      .then((res) => {
        setOptions(res.data.map((el) => ({ label: el, value: el })));
      })

      .catch((err) => console.log("Category Error", err));
  };

  // Select category
  const selectCategory = (category) => {
    console.log(category);
    axios.get(`${API_BASE}/category/${category.value}`).then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  };

  console.log(products);
  return (
    <div className="w-full h-full">
      <div className="flex gap-x-4 py-4 px-[8%]">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="p-1 border-2 border-slate-400 rounded-md outline-blue-500"
            placeholder="Search..."
            onChange={(e) => setSearchProduct(e.target.value)}
            value={searchProduct}
          />
        </form>
        <Select
          className="w-[200px]"
          options={options}
          onChange={selectCategory}
        />
      </div>

      <div className=" p-8">
        <div className="w-full min-h-[500px] flex flex-col items-start gap-y-4 bg-white p-4 rounded-2xl">
          {loading ? (
            <Loader visible={loading} />
          ) : (
            <InfiniteScroll
              dataLength={products.length}
              next={()=> {
                setLimit((prev)=> prev + 10)
              }}
              hasMore={hasMore}
              // loader={<Loader />}
            >
              {products ? (
                <Product products={products} />
              ) : (
                <h1>No Products available at the moment</h1>
              )}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </div>
  );
}
