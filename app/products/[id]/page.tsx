import { getProduct, getProducts, type Product } from "@/lib/api";
import ProdectDetails from "@/components/prodectdetails";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return <ProdectDetails product={product} />;
}
