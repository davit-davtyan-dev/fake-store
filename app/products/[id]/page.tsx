import { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import ProductRating from "@/components/ProductRating";
import { getProduct } from "@/lib/products";

type ProductProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Not found!",
      description:
        "The product you are looking for is not found. Please check the url you are using.",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (isNaN(Number(id)) || !product) {
    return (
      <div className="flex flex-col items-center mt-16">
        {isNaN(Number(id)) ? (
          <h1 className="text-3xl mb-4">Invalid product id</h1>
        ) : (
          <>
            {" "}
            <h1 className="text-3xl mb-4">
              The product you are looking for is not found
            </h1>
            <h3 className="text-lg mb-4">
              Please check the url you are using.
            </h3>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">{product.title}</h2>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={480}
          height={480}
          className="object-contain"
          priority={false}
          fetchPriority="low"
          loading="lazy"
        />
        <div className="gap-2">
          <h6 className="text-sm mb-2 text-muted-foreground">
            {product.category}
          </h6>
          <h3 className="text-lg mb-2">{product.description}</h3>
          <ProductRating rating={product.rating} className="mb-2" />
          <span className="flex mb-4 font-semibold text-lg">
            ${product.price}
          </span>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}
