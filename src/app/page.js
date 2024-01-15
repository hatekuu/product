"use client"
import ProductItem from '@/components/ProductItem'
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [product, setOneProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
  
    // add your Realm App Id to the .env.local file
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      const oneProduct = await user.functions.getOneProduct("65a5382b6f8936a0a02b6987");
      setOneProduct(() => oneProduct);
      setProducts(() => allProducts);
    console.log("product: ",oneProduct)
    } catch (error) {
      console.error(error);
    }}
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.price} product={product} />
      ))}
    </div>
  )
}
