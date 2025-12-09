import { useState } from "react";
import { useCartContext } from "../CartProvider";
import minus from "/icon-minus.svg";
import plus from "/icon-plus.svg";

export default function Controls() {
  const { addToCart } = useCartContext();
  const [itemsNumber, setItemsNumber] = useState(0);
  const id = 1;

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
      <div className="bg-my-light-grayish-blue flex flex-row items-center justify-between rounded-md px-3 py-4 lg:basis-1/3">
        <button
          className="cursor-pointer"
          disabled={itemsNumber === 0 ? true : false}
          onClick={() => {
            setItemsNumber((pS) => (pS === 0 ? 0 : pS - 1));
          }}
        >
          <img src={minus} alt="Minus icon" />
        </button>
        <p className="font-bold">{itemsNumber}</p>
        <button
          className="cursor-pointer"
          onClick={() => {
            setItemsNumber((pS) => pS + 1);
          }}
        >
          <img src={plus} alt="Plus icon" />
        </button>
      </div>
      <button
        onClick={() => {
          addToCart(id, itemsNumber);
        }}
        className="bg-my-orange text-my-very-dark-blue shadow-my-light-orange flex w-full cursor-pointer flex-row items-center justify-center gap-3 rounded-md p-3 font-bold shadow-[0px_10px_15px_0px] lg:basis-2/3"
      >
        Add to cart
      </button>
    </div>
  );
}
