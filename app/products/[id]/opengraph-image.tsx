import { ImageResponse } from "next/og";
import { getProduct } from "@/lib/products";

export const contentType = "image/jpg";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            color: "#333",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Product not found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          border: "1px solid #eee",
          padding: 32,
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            objectFit: "contain",
            background: "#f9f9f9",
            border: "1px solid #eee",
          }}
        />
        <span
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#222",
            textAlign: "center",
          }}
        >
          {product.title}
        </span>
      </div>
    ),
    { ...size }
  );
}
