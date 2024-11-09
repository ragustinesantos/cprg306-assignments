"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import {
  dbGetItems,
  dbAddItem,
  dbDeleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async (userId, getItemsSetter) => {
    await dbGetItems(userId, getItemsSetter);
  };

  useEffect(() => {
    if (user) {
      loadItems(user.uid, setItems);
    }
  }, [user]);

  const handleItem = async (item) => {
    const item_id = await dbAddItem(user.uid, item);
    setItems([...items, { id: item_id, ...item }]);
  };

  const handleDelete = async (itemId) => {
    const currentItems = items;
    await dbDeleteItem(user.uid, itemId);
    setItems(currentItems.filter((item) => item.id != itemId));
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

  if (!user) {
    return (
      <main>
        <p>You need to be signed in to view this page</p>
      </main>
    );
  }

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleItem} />
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
            onItemDelete={handleDelete}
          />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
