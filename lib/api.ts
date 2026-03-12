export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  thumbnail: string;
  images: string[];
  rating: number;
  stock: number;
};

const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}?limit=8`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export async function getProduct(id: string | number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}