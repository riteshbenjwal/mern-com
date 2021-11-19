import React, { useEffect, useState } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";

import { loadCart } from "./helper/cartHelper";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
     setProducts(loadCart())
  }, [reload])

  const loadAllProducts = () => {
    return (
      <div>
        <h1>This section is to load products</h1>
        {
            products.map((product, index)=>{
                return(
                <Card 
                key={index}
                product={product}
                addtoCart={false}
                removeFromCart={true}
                setReload={setReload}
                reload={reload}
                />
                )
            })
        }
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h1>This section for Checkout</h1>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
}
