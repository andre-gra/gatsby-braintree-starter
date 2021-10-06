import React from "react";
import { useCart } from "react-use-cart";

function CartItem({ id, title, quantity, price, image }) {
  const { updateItemQuantity, removeItem } = useCart();

  const increment = () => updateItemQuantity(id, quantity + 1);
  const decrement = () => updateItemQuantity(id, quantity - 1);
  const remove = () => removeItem(id);

  const total = quantity * price;

  const formattedUnitPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  const formattedLineTotal = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(total);

  return (
    <div
      key={id}
      className="bg-gray-200 rounded-lg flex items-center py-6 px-6 mb-3 relative"
    >
      <div className="w-3/5 flex flex-grow flex-col items-center">
        <span className="mx-2">{title}</span>
        <div className="absolute bottom-1 left-1">
          <button
            className="text-gray-600 hover:text-black text-xs flex items-center focus:outline-none"
            onClick={remove}
          >
            <svg
              className="fill-current w-3 h-3 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
            Remove
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center ml-auto">
        <button
          className="text-gray-600 hover:text-primary focus:outline-none p-1"
          onClick={increment}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>

        <span className="mx-3 md:mx-6 p-1">{quantity}</span>

        <button
          className="text-gray-600 hover:text-primary focus:outline-none p-1"
          onClick={decrement}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>

      <div className="text-right md:w-1/5 mx-2">
        <p className="font-medium text-gray-600">{formattedLineTotal}</p>
        {quantity > 1 && (
          <p className="text-gray-500 text-sm">{formattedUnitPrice} each</p>
        )}
      </div>
    </div>
  );
}

export default CartItem;
