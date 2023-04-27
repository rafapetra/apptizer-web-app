import React, { useState, useEffect } from "react";
import { db , auth , app , getDb } from './../firebase.js'
import { collection, addDoc , setDoc, doc, getDoc , getDocs , } from "firebase/firestore";
import NewFoodForm from "./NewFoodForm.js";

function AddItems() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [foodItems, setFoodItems] = useState([]);


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

  useEffect(() => {
    const user = auth.currentUser;
    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userFoodsCollectionRef = collection(userDocRef, "foods");

    getDocs(userFoodsCollectionRef)
      .then((querySnapshot) => {
        const foods = querySnapshot.docs.map((doc) => doc.data());
        setFoodItems(foods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const foodOptions = foodItems.map((food) => (
    <option key={food.id} value={food.id}>
      {food.name}
    </option>
  ));

  const currentlyVisibleState = formVisibleOnPage ? (
    <NewFoodForm onNewFoodCreation={handleAddingNewFood} />
  ) : (
    <div>
      Item saved!
      <select>{foodOptions}</select>
    </div>
  );

    const user = auth.currentUser;
    const uid = user.uid;
    
    const userDocRef = doc(db, "users", uid);
    const userFoodsCollectionRef = collection(userDocRef, "foods");

    getDocs(userFoodsCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("Document data:", doc.id, " => ", doc.data());
      });
    }).catch((error) => {
      console.error(error);
    });

  return (
    <React.Fragment>
      <div className="content">
        {currentlyVisibleState}
        </div> 
    </React.Fragment>
  );
}

export default AddItems;

