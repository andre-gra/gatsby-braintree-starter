import "./src/styles/global.css";
import React from "react";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./src/urql/client.js";
import { Provider } from "urql";

import {
  handleItemAdded,
  handleItemUpdated,
  handleItemRemoved,
} from "./src/utils/cart-helpers";

const toastOptions = {
  position: "top-right",
  draggable: false,
  toastClassName:
    "bg-primary text-white text-center px-2 py-3 shadow-none rounded-lg",
  progressClassName: "h-0",
  closeButton: false,
  autoClose: 2000,
};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Provider value={client}>
        <CartProvider
          id={"guest"}
          onItemAdd={handleItemAdded}
          onItemUpdate={handleItemUpdated}
          onItemRemove={handleItemRemoved}
        >
          {element}
        </CartProvider>
        <ToastContainer {...toastOptions} />
      </Provider>
    </>
  );
};
