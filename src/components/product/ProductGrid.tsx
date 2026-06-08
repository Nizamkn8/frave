import React from 'react'
// import ProductCard from './ProductCard'

const ProductGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Collection
        </p>

        <h2 className="text-4xl font-bold text-zinc-900">
          Featured Products
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </section>
  )
}

export default ProductGrid
