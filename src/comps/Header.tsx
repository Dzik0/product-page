import logo from "/logo.svg";
import cartLogo from "/icon-cart.svg";
import avatar from "/image-avatar.png";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import { useState } from "react";
import PCMenu from "./PCMenu";
import { useCartContext } from "./CartProvider";

export default function Header() {
  const { cart } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = cart?.reduce((p, c) => p + c.quantity, 0) || 0;
  return (
    <div>
      <header className="bg-my-white flex flex-row items-center justify-between p-6">
        <div className="flex flex-row items-center gap-4">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <div>
            <img src={logo} alt="Logo of the company" />
          </div>
          <div className="hidden lg:block">
            <PCMenu />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 lg:gap-10">
          <div className="relative">
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsCartOpen((pS) => !pS);
              }}
            >
              <img src={cartLogo} alt="Cart logo" />
            </button>
            {totalItems > 0 && (
              <div className="bg-my-orange absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-[50%] text-xs text-white">
                <span>{totalItems}</span>
              </div>
            )}
          </div>
          <div className="w-8">
            <img src={avatar} alt="Avatar of the user" />
          </div>
        </div>
      </header>
      <div className="hidden border border-slate-200 lg:block"></div>
      {isCartOpen && <Cart />}
    </div>
  );
}
