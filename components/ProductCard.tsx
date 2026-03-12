import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/api";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-blue-600 group-hover:underline">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}