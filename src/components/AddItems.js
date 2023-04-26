import React, { useState } from "react";
import { db , auth , app } from './../firebase.js'
import { collection, addDoc , setDoc, doc, getDoc } from "firebase/firestore";
import NewFoodForm from "./NewFoodForm.js";

function AddItems() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);

  const handleAddingNewFood = async (newFoodData) => {
    const user = auth.currentUser;
    const uid = user.uid;
    const userCollectionRef = collection(db, "users", uid, "foods");
    await addDoc(userCollectionRef, newFoodData);

    const userRef = collection(db, "users")
    const userDocRef = doc(userRef, uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();
    const updatedUserData = {
      ...userData,
      lastLoggedIn: new Date().toISOString()
    };
    await setDoc(userDocRef, updatedUserData);

    setFormVisibleOnPage(false);

  };

  const currentlyVisibleState = formVisibleOnPage ?
    <NewFoodForm onNewFoodCreation={handleAddingNewFood} /> :
    "Item saved!";

  return (
    <React.Fragment>
      <div className="content">{currentlyVisibleState}</div> 
    </React.Fragment>
  );
}

export default AddItems;

