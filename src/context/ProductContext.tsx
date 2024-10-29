import React, { createContext, ReactNode, useMemo, useState } from "react";
import productImage from "../../src/images/Product.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: any;
}

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  totalAmount: number;
}
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      quantity: 3,
      name: "LogoIpsum IPL + Warranty",
      price: 99.99,
      image: productImage,
    },
  ]);

  const totalAmount = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, totalAmount }}>
      {children}
    </ProductContext.Provider>
  );
};
