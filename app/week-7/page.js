"use client";

import { useState } from "react";
import { itemsData } from "./items";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-950">
      <div className="m-4">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
