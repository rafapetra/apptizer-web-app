import React, { useState } from 'react';
import db from './../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import NewFoodForm from './NewFoodForm.js';


function Content() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  
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
              <div className="content">
                <span className="content--header">
                    <h1>Fuel better.</h1>
                    <p>Discover your balance and keep track of it.</p>
                </span>
                {currentlyVisibleState}
              </div>

            </React.Fragment>
    )
}

export default Content;