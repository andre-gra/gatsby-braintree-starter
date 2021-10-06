import * as React from "react";

function SvgCart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#f0c419" d="M6 13.5h53v24H6z" />
      <path
        d="M60 38.5H5v-26h55v26zm-53-2h51v-22H7v22zM6 5.5H1a1 1 0 110-2h5a1 1 0 110 2z"
        fill="#556080"
      />
      <path
        d="M6 14.5a1 1 0 01-1-1v-9a1 1 0 112 0v9a1 1 0 01-1 1zM6 48.5a1 1 0 01-1-1v-10a1 1 0 112 0v10a1 1 0 01-1 1z"
        fill="#556080"
      />
      <circle cx={16} cy={52.5} r={4} fill="#4c8056" />
      <circle cx={43} cy={52.5} r={4} fill="#4c8056" />
      <path
        d="M52 48.5H6a1 1 0 110-2h46a1 1 0 110 2zM59 22.5H6a1 1 0 110-2h53a1 1 0 110 2zM59 30.5H6a1 1 0 110-2h53a1 1 0 110 2z"
        fill="#556080"
      />
    </svg>
  );
}

export default SvgCart;
