"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const increment = () => {
    event.preventDefault();
    if (quantity < 20) {
      let currentQuantity = quantity;
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    event.preventDefault();
    if (quantity > 1) {
      let currentQuantity = quantity;
      setQuantity(currentQuantity - 1);
    }
  };

  const generateRandomString = (chars) => {
    let generatedString = "";
    const selection =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < chars; i++) {
      generatedString += selection.charAt(
        Math.floor(Math.random() * selection.length)
      );
    }
    return generatedString;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateRandomString(16),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setQuantity(1);
    setName("");
    setCategory("produce");
  };

  let buttonStyle =
    "text-center font-semibold w-8 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-opacity-75 ml-1 font-semibold bg-blue-500 disabled:bg-gray-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      {/* Input Text */}
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={handleNameChange}
        className="w-full mt-1 mb-3 border-2 border-gray-300 p-2 rounded-lg font-sans"
        required
      />
      <div className="flex justify-between">
        {/* Quantity */}
        <div className="flex flex-row justify-between p-2 w-36 bg-white rounded-lg">
          <p className="text-black">{quantity}</p>
          <div className="flex">
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
        {/* Category */}
        <select
          onChange={handleCategoryChange}
          value={category}
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        >
          <option disabled>Category</option>
          <option value="produce" defaultValue>
            Produce
          </option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Submit */}
      <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75">
        +
      </button>
    </form>
  );
}
