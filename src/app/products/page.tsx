// import ProductCard from "@/src/components/product/ProductCard";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

async function getProducts() {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">Our Collection</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product) => (
            <div key={product.id}>
              <div> {product.name} </div>
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={125}
              />
              <div>{product.description}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
