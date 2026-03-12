import ProductCard from "@/components/ProductCard";
import { getProducts, type Product } from "@/lib/api";

export const metadata = {
  title: "Products",
  description: "Product listing page",
};

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Discover Products
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Explore our collection of top-rated products carefully selected for quality and style.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </main>
  );
}