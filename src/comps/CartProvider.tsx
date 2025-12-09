import { createContext, useContext, useState, type ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface ContextProps {
  cart: Cart[] | undefined;
  addToCart: (id: number, quan: number) => void;
  removeFromCart: (id: number) => void;
}

interface Cart {
  id: number;
  quantity: number;
}

const CartContext = createContext<ContextProps | undefined>(undefined);
export { CartContext };

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

  /*   function handleCart(id: number, type: "minus" | "plus") {
    const foundItem = cart.find((item) => item.id === id);

    if (type === "plus") {
      if (foundItem) {
        setCart((pS) =>
          pS.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        );
        return;
      }

      setCart((pS) => [...pS, { id: id, quantity: 1 }]);
    }

    if (type === "minus") {
      if (foundItem) {
        setCart((pS) =>
          pS
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        );

        return;
      }
    }
  } */

  function removeFromCart(id: number) {
    setCart((pS) => pS.filter((item) => item.id !== id));
  }

  function addToCart(id: number, quan: number) {
    setCart((pS) => {
      const foundItem = pS.find((item) => item.id === id);

      if (foundItem) {
        return pS.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quan } : item,
        );
      }

      return [...pS, { id: id, quantity: quan }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("This component needs a CartContext Provider!");

  return cartContext;
}
