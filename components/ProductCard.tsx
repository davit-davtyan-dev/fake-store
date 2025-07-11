import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import ProductRating from "./ProductRating";

import type { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, category, image, price, rating } = product;

  return (
    <Card className="px-2 justify-between">
      <CardHeader>
        <CardTitle>
          <Link href={`/products/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="px-2 py-4">
        <div className="relative w-full h-32">
          <Image src={image} alt={title} fill className="object-contain mb-4" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-semibold text-lg">${price}</span>
        <ProductRating rating={rating} />
      </CardFooter>
      <CardAction className="w-full">
        <AddToCartButton />
      </CardAction>
    </Card>
  );
}
