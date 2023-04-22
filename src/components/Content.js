import React, { useState } from 'react';
import db from './../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import NewFoodForm from './NewFoodForm.js';


function Content() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);

  const handleClick = () => {
      setFormVisibleOnPage(true);
    }
  
    const handleAddingNewFood = async (newFoodData) => {
      const collectionRef = collection(db, "foods");
      await addDoc(collectionRef, newFoodData);
      setFormVisibleOnPage(false);
    }

  let currentlyVisibleState = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewFoodForm
      onNewFoodCreation={handleAddingNewFood} />
  } else {
    currentlyVisibleState = "not showing form"

  }
    return (
            <React.Fragment>
              <h2>Content</h2>
              {currentlyVisibleState}
            </React.Fragment>
    )
}

export default Content;