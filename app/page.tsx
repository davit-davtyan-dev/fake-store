import ProductCard from "../components/ProductCard";
import { getAllProducts } from "@/lib/products";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
