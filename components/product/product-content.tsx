import Image from "next/legacy/image";
import { CircleDollarSign, Star } from "lucide-react";
import BackButton from "@/components/navigation/back-to-home";
import { Product } from "@/types/product";

export default function ProductContent({ product }: { product: Product }) {
  return (
    <>
      <BackButton />
      <h1 className="text-2xl font-bold mb-4 text-center">
        Detalhes do Produto
      </h1>
      <div className="border rounded shadow-lg p-4 max-w-sm mx-auto">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded object-contain"
          layout="responsive"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/placeholder.svg"
        />
        <div className="flex justify-between text-center mt-2">
          <div className="flex items-center gap-1">
            <CircleDollarSign size={18} />
            <p>{product.price}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star size={18} />
            <p>{product.rating?.rate || "N/A"}</p>
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-4 text-center">
          {product.title}
        </h2>
        <hr />
        <p className="text-center mt-2 overflow-auto h-60">
          {product.description}
        </p>
      </div>
    </>
  );
}
