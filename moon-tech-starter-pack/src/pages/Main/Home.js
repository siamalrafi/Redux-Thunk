import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, toggleStack } from "../../redux/actionTypes/filterAction";

const Home = () => {
   const [products, setProducts] = useState([]);
   const dispatch = useDispatch();
   const filters = useSelector((state) => state).filter.filters;
   const { brand, stock } = filters;

   console.log(brand, stock);

   useEffect(() => {
      fetch("http://localhost:5000/products")
         .then((res) => res.json())
         .then((data) => setProducts(data.data));
   }, []);

   const activeClass = "text-white  bg-indigo-500 border-white";

   return (
      <div className="max-w-7xl gap-14 mx-auto my-10">
         <div className="mb-10 flex justify-end gap-5">
            <button
               className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
               onClick={() => {
                  dispatch(toggleStack());
               }}
            >
               In Stock
            </button>
            <button
               className={`border px-3 py-2 rounded-full font-semibold`}
               onClick={() => {
                  dispatch(toggleFilter("amd"));
               }}
            >
               AMD
            </button>
            <button
               className={`border px-3 py-2 rounded-full font-semibold`}
               onClick={() => {
                  dispatch(toggleFilter("intel"));
               }}
            >
               Intel
            </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {products.map((product) => (
               <ProductCard key={product.model} product={product} />
            ))}
         </div>
      </div>
   );
};

export default Home;
