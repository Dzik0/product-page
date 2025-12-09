import img from "/image-product-3.jpg";
import del from "/icon-delete.svg";
import { useDataContext } from "./DataProvider";
import { useCartContext } from "./CartProvider";

interface SingleCartItemProps {
  id: number;
  quantity: number;
}

export default function SingleCartItem({ id, quantity }: SingleCartItemProps) {
  const { data } = useDataContext();
  const { removeFromCart } = useCartContext();

  const foundItem = data.find((item) => item.id === id);

  const singlePrice = (
    (Number(foundItem?.price) * Number(foundItem?.discount)) /
    100
  ).toFixed(2);

  const totalPrice = (
    ((Number(foundItem?.price) * Number(foundItem?.discount)) / 100) *
    quantity
  ).toFixed(2);

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="w-15 overflow-hidden rounded-md">
        <img src={img} alt="" />
      </div>
      <div className="text-my-dark-grayish-blue text-sm font-bold">
        <h4 className="capitalize">{foundItem?.title}</h4>
        <div className="flex flex-row gap-3">
          <p>
            ${singlePrice} x {quantity}
          </p>
          <p className="text-black">${totalPrice}</p>
        </div>
      </div>
      <button
        onClick={() => {
          removeFromCart(id);
        }}
      >
        <img src={del} alt="Delete icon" />
      </button>
    </div>
  );
}
