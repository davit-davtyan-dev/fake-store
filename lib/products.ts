import { cache } from "react";
import type { Product } from "@/types/Product";

const BASE_API_URL = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_API_URL}/products`);
    if (!res.ok) throw new Error("Something went wrong!");
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch products", err);
    return [];
  }
}

export const getProduct = cache<(id: string) => Promise<Product | undefined>>(
  async (id) => {
    try {
      const res = await fetch(`${BASE_API_URL}/products/${id}`);
      if (!res.ok) throw new Error("Something went wrong!");
      return await res.json();
    } catch (err) {
      console.error("Failed to fetch product", err);
      return undefined;
    }
  }
);
