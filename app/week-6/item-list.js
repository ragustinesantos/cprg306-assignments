"use client";

import { useState } from "react";
import Item from "./item";
import { items } from "./items";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    "bakery",
    "canned goods",
    "dairy",
    "dry goods",
    "household",
    "meat",
    "produce",
  ];

  const btnInactive = "bg-orange-700 p-1 m-2 w-28";
  const btnActive = "bg-orange-500 p-1 m-2 w-28";

  const handleClick = (event) => setSortBy(event.target.value);

  const nameSort = (a, b) => {
    const valueA = a.name.toLowerCase();
    const valueB = b.name.toLowerCase();

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  };

  const categorySort = (a, b) => {
    const valueA = a.category.toLowerCase();
    const valueB = b.category.toLowerCase();

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  };

  if (sortBy == "name") {
    items.sort(nameSort);
  } else if (sortBy == "category" || sortBy == "grouped") {
    items.sort(categorySort);
  }

  const groupCat = categories.map((category) => {
    return (
      <div key={category.id}>
        <h3 className="capitalize text-xl" key={category.id}>
          {category}
        </h3>
        {items.map((item) => {
          if (item.category == category) {
            return (
              <li className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            );
          }
        })}
      </div>
    );
  });

  const itemEntries = items.map((item) => {
    return (
      <li className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      </li>
    );
  });

  return (
    <div>
      <div>
        <label>Sort by:</label>
        <button
          className={sortBy == "name" ? btnActive : btnInactive}
          onClick={handleClick}
          value="name"
        >
          Name
        </button>
        <button
          className={sortBy == "category" ? btnActive : btnInactive}
          onClick={handleClick}
          value="category"
        >
          Category
        </button>
        <button
          className={sortBy == "grouped" ? btnActive : btnInactive}
          onClick={handleClick}
          value="grouped"
        >
          Grouped Category
        </button>
      </div>
      <ul>{sortBy == "grouped" ? groupCat : itemEntries}</ul>
    </div>
  );
}
