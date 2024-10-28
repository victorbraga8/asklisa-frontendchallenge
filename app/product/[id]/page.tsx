"use client";

import { Suspense, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import ProductContent from "@/components/product/product-content";
import apiClient from "@/services/networkClient";
import { Product } from "@/types/product";
import { FolderSearch } from "lucide-react";
import BackButton from "@/components/navigation/back-to-home";
import Skeleton from "@/components/skeleton/skeleton";

const fetcher = (url: string) => apiClient.get(url).then((res) => res.data);

const ProductDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState<string | null>(null);

  const {
    data: product,
    error: swrError,
    isLoading,
  } = useSWR<Product>(id ? `/products/${id}` : null, fetcher, {
    onError: (error) => setError(error.message),
  });

  if (!isLoading && (!product || swrError || error)) {
    return (
      <>
        <BackButton />
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)]">
          <div className="flex flex-col justify-center items-center text-center">
            <FolderSearch className="text-amber-600" size={100} />
            <p>Not found for parameters inserted.</p>
            <p>Go back to our home page.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <Suspense fallback={<Skeleton />}>
      {product ? <ProductContent product={product} /> : <Skeleton />}
    </Suspense>
  );
};

export default ProductDetails;
