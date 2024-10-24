"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const btnInactive = "bg-orange-700 p-1 m-2 w-28";
  const btnActive = "bg-orange-500 p-1 m-2 w-28";

  let itemsToSort = [...items];

  const groupedList = itemsToSort.reduce((accumulator, currentItem) => {
    if (!accumulator[currentItem.category]) {
      accumulator[currentItem.category] = [];
    }

    accumulator[currentItem.category].push(currentItem);

    return accumulator;
  }, {});

  const groupedKeys = Object.keys(groupedList).sort();

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
    itemsToSort.sort(nameSort);
  } else if (sortBy == "category" || sortBy == "grouped") {
    itemsToSort.sort(categorySort);
  }

  const groupCat = groupedKeys.map((category) => {
    return (
      <div key={category}>
        <h3 className="capitalize text-xl" key={category}>
          {category}
        </h3>
        {groupedList[category].sort(nameSort).map((item) => {
          if (item.category == category) {
            return (
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
                key={item.id}
              />
            );
          }
        })}
      </div>
    );
  });

  const itemEntries = itemsToSort.map((item) => {
    return (
      <Item
        name={item.name}
        quantity={item.quantity}
        category={item.category}
        onSelect={() => onItemSelect(item)}
        key={item.id}
      />
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
