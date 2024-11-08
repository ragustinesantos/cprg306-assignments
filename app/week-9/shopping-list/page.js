"use client";

import { useState } from "react";
import { itemsData } from "./items";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  console.log(selectedItemName);

  const handleItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    console.log("clicked");
    const itemName = item.name;
    let extractedName = itemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );

    if (extractedName.includes(",")) {
      extractedName = extractedName.split(",")[0];
    }

    extractedName = extractedName.trim();
    setSelectedItemName(extractedName);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
