import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductRate from './ProductRate'
import AddToCart from './AddToCart'

export default function ProductItem({ product }) {
  console.log("product 124: ",product)
  return (
    <div className="card">
      <Link href={`/product/${product.price}`}>
        
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.name}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews} />
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  )
}
