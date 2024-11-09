import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const dbGetItems = async (userId, getItemsSetter) => {
  try {
    // Create a reference to the location within db structure
    const allItemsReference = collection(db, "users", userId, "shopping-list");
    // Create a query from the reference
    const allItemsQuery = query(allItemsReference);
    // Use query to retrieve desired entries using getDocs
    const allItemsSnapshot = await getDocs(allItemsQuery);
    // forEach format to adhere to desired object structure and persist
    let allItemsResult = [];
    allItemsSnapshot.forEach((item) => {
      let currentItem = {
        id: item.id,
        ...item.data(),
      };
      allItemsResult.push(currentItem);
      getItemsSetter(allItemsResult);
    });
    // Set to items
    console.log(allItemsResult);
  } catch (error) {
    console.log(error);
  }
};

export const dbAddItem = async (userId, itemObject) => {
  try {
    // Create a reference to the location within db structure
    const newItemReference = collection(db, "users", userId, "shopping-list");
    // Add desired object to the reference; Returns a promise
    const newItemPromise = await addDoc(newItemReference, itemObject);
    // Return the id from the promise for updating the item's id attribute
    console.log(`item id: ${newItemPromise.id} has been added`);
    return newItemPromise.id;
  } catch (error) {
    console.log(error);
  }
};

export const dbDeleteItem = async (userId, itemId) => {
  try {
    const deleteItemReference = doc(
      db,
      "users",
      userId,
      "shopping-list",
      itemId
    );
    await deleteDoc(deleteItemReference);
    console.log(`item id: ${itemId} has been deleted`);
  } catch (error) {
    console.log(error);
  }
};
