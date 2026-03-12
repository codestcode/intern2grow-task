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

type ProductsResponse = {
  products: Product[];
  total?: number;
};

const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(limit = 8): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}?limit=${limit}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

export async function getAllProducts(): Promise<Product[]> {
  const firstPageRes = await fetch(`${BASE_URL}?limit=1`, {
    cache: "force-cache",
  });

  if (!firstPageRes.ok) {
    throw new Error("Failed to fetch products");
  }

  const firstPage: ProductsResponse = await firstPageRes.json();
  const total = firstPage.total ?? firstPage.products.length;

  const res = await fetch(`${BASE_URL}?limit=${total}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

export async function getProduct(id: string | number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: Product = await res.json();
  return data;
}
