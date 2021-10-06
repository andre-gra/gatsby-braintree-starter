import React from "react";
import { Link } from "gatsby";
import { useCart } from "react-use-cart";

import CartItemList from "./cartItemList";

function Cart() {
  const { isEmpty, cartTotal } = useCart();
  const formattedSubTotal = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(cartTotal);

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <React.Fragment>
      <CartItemList />

      <div className="mt-3 md:mt-6 py-3 md:py-6">
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-end mb-3">
            <span className="text-slategray">Sub total</span>
            <span className="text-xl font-bold text-primary">
              {formattedSubTotal}
            </span>
          </div>

          <Link
            to="/checkout"
            className="bg-purple-900 hover:bg-gray-400 px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none"
          >
            Checkout
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
