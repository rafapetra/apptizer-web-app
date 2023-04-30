import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, auth, app, getDb } from "./../firebase.js";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import NewFoodForm from "./NewFoodForm.js";

const StyledWrapper = styled.div`
  font-size: 8pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  margin-top: 15px;
  margin-left: 40px;
  padding-bottom: 10px;
  background-color: #447cfc;
  &:hover a {
    text-decoration: none;
  }
`;

function AddItems() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);

  const handleAddingNewFood = async (newFoodData) => {
    const user = auth.currentUser;
    const uid = user.uid;
    const userCollectionRef = collection(db, "users", uid, "foods");
    await addDoc(userCollectionRef, newFoodData);

    const userRef = collection(db, "users");
    const userDocRef = doc(userRef, uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();
    const updatedUserData = {
      ...userData,
      lastLoggedIn: new Date().toISOString(),
    };
    await setDoc(userDocRef, updatedUserData);

    setFormVisibleOnPage(false);
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setErrorMessage("User not logged in.");
      return;
    }
    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userFoodsCollectionRef = collection(userDocRef, "foods");

    getDocs(userFoodsCollectionRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setFoodDocs(docs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const currentlyVisibleState = formVisibleOnPage ? (
    <NewFoodForm onNewFoodCreation={handleAddingNewFood} />
  ) : (
    <div>Item saved!</div>
  );

  return (
    <StyledWrapper>
      {" "}
      {auth.currentUser == null ? (
        <React.Fragment>
          {errorMessage && <div>{errorMessage}</div>}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="content">
            {currentlyVisibleState}

            <select>
              {foodDocs.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.data.name}
                </option>
              ))}
            </select>
            
          </div>
        </React.Fragment>
      )}
    </StyledWrapper>
  );
}

export default AddItems;
