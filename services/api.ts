import axios from "axios";
import apiClient from "./networkClient";
import { Product } from "@/types/product";

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get<Product[]>("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const fetchProductById = async (
  id: string | number
): Promise<Product> => {
  try {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o produto com ID ${id}:`, error);
    return {} as Product;
  }
};

export const fetchProductData = async (id: number) => {
  try {
    const response = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log("Axios parallel response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o produto com ID ${id} usando Axios:`, error);
    return {} as Product;
  }
};
