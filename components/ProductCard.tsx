import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, category, image, price, rating } = product;

  return (
    <Card className="justify-between">
      <CardHeader>
        <CardTitle>
          <Link href={`/products/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative w-full h-32">
          <Image src={image} alt={title} fill className="object-contain mb-4" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-semibold text-lg">${price}</span>
        <span className="flex items-center gap-1 text-sm text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          {rating.rate} <span className="text-gray-500">({rating.count})</span>
        </span>
      </CardFooter>
    </Card>
  );
}
