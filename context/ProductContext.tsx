"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { fetchAllProducts } from "@/services/api";
import { Product, ProductContextType } from "@/types/product";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [defaultData, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllProducts();
      setProducts(data);

      const minPrice = Math.min(...data.map((p) => p.price));
      const maxPrice = Math.max(...data.map((p) => p.price));

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      setPriceRange([minPrice, maxPrice]);
    } catch (err) {
      setError("Erro ao buscar produtos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const value = useMemo(
    () => ({
      defaultData,
      loading,
      error,
      fetchProducts: loadProducts,
      minPrice,
      maxPrice,
      setPriceRange,
      priceRange,
    }),
    [defaultData, loading, error, loadProducts, minPrice, maxPrice, priceRange]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext deve ser usado dentro de um ProductProvider"
    );
  }
  return context;
};
