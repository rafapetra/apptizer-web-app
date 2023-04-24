import React, { useState } from "react";
import { db } from './../firebase.js'
import { collection, addDoc } from "firebase/firestore";
import NewFoodForm from "./NewFoodForm.js";

function AddItems() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);

  const handleAddingNewFood = async (newFoodData) => {
    const collectionRef = collection(db, "foods");
    await addDoc(collectionRef, newFoodData);
    setFormVisibleOnPage(false);
  };

  let currentlyVisibleState = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = (
      <NewFoodForm onNewFoodCreation={handleAddingNewFood} />
    );
  } else {
    currentlyVisibleState = "Item saved!";
  }
  return (
    <React.Fragment>
      <div className="content">{currentlyVisibleState}</div>
    </React.Fragment>
  );
}

export default AddItems;
