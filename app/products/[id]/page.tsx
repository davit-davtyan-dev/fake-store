import { Metadata } from "next";
import Image from "next/image";
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

  if (isNaN(Number(id))) {
    return (
      <div className="flex flex-ceter">
        <h1 className="text-3xl mb-4">Invalid product id</h1>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl mb-4">
          The product you are looking for is not found
        </h1>
        <h1 className="text-lg mb-4">Please check the url you are using.</h1>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">{product.title}</h2>
      <div className="flex gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={480}
          height={480}
          className="object-contain mb-4"
        />
        <div className="gap-2">
          <h3 className="text-lg my-2">{product.description}</h3>
        </div>
      </div>
    </div>
  );
}
