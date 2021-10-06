import React, { useState } from "react";
import Cart from "./cart";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

export default function CartPop(props) {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <div className={`${props.className}`}>
      <Popover className="relative">
        <Popover.Button ref={setReferenceElement} className="align-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white md:text-coffee-brown"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="z-10 min-w-max"
        >
          <div className="flex flex-col bg-white border-gray-200 mb-14 shadow-lg px-8 rounded-md">
            <Cart>{/* render app/cart here */}</Cart>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
