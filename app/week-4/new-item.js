"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      let currentQuantity = quantity;
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      let currentQuantity = quantity;
      setQuantity(currentQuantity - 1);
    }
  };

  let buttonStyle =
    "text-center w-8 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-opacity-75 ml-1 font-semibold bg-blue-500 disabled:bg-gray-400";

  return (
    <div className="flex flex-row justify-between p-2 m-4 w-36 bg-white">
      <p className="text-black">{quantity}</p>
      <div>
        <button
          disabled={quantity <= 1 ? true : false}
          className={buttonStyle}
          onClick={decrement}
        >
          -
        </button>
        <button
          disabled={quantity >= 20 ? true : false}
          className={buttonStyle}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
