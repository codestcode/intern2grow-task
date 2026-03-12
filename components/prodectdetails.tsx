import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/api";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="rounded-[28px] bg-[#efeae2] p-6 shadow-sm">
            <div className="flex min-h-[520px] items-center justify-center overflow-hidden rounded-[24px] bg-[#e7e1d8]">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={700}
                height={700}
                priority
                className="h-auto max-h-[500px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="pt-2">
            <div className="mb-6">
              <Link
                href="/"
                className="text-sm text-gray-500 transition hover:text-gray-900"
              >
                ← Back to products
              </Link>
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              {product.category}
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-[#22160f] sm:text-5xl">
              {product.title}
            </h1>

            {product.brand && (
              <p className="mt-4 text-base text-gray-500">
                Brand:{" "}
                <span className="font-medium text-gray-800">{product.brand}</span>
              </p>
            )}

            <p className="mt-6 text-3xl font-bold text-[#5b2d0c] sm:text-4xl">
              ${product.price}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Rating</p>
                <p className="mt-2 text-xl font-semibold text-[#22160f]">
                  {product.rating} / 5
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Stock</p>
                <p className="mt-2 text-xl font-semibold text-[#22160f]">
                  {product.stock}
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Product ID</p>
              <p className="mt-2 text-lg font-semibold text-[#22160f]">
                #{product.id}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}