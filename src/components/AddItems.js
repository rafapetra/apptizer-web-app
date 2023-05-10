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
  deleteDoc,
} from "firebase/firestore";
import NewFoodForm from "./NewFoodForm.js";
import salad from "../images/salad.png";

const Button = styled.button`
background-color: #ffffff;
font-size: 7pt;
width: 80px;
height: auto;
border: solid .8px #ffffff;
border-radius: 16pt;
margin-left: 73px;
margin-top: 20px;
margin-bottom: auto;
color: #000000;
padding: 4px;

&:hover {
  background-color: #447cfc; 
  cursor: pointer;
  border: solid .8px #ffffff;
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  &:active, focus {
    background-color: #b3ff57; 
    color: #000000;
  }
`;

const StyledWrapper = styled.div`
  font-size: 8pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  background: #447cfc;
  &:hover a {
    text-decoration: none;
  }
`;

const DeleteBox = styled.div`
  order: 2;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ManageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const BoxHeader = styled.div`
  order: 0;
  height: 60px;
`;

const Content = styled.div`
  order: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: auto;
  gap: 15px;
`;

const HeaderDiv = styled.div`
  margin-top: 15px;
  gap: 15px;
`;

const HeaderTitle = styled.span`
  font-size: 20pt;
`;

function AddItems() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);
  const [selectedFoodId, setSelectedFoodId] = useState("");

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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
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
      } else {
        setErrorMessage("User not logged in.");
      }
    });

    return unsubscribe;
  }, []);

  const currentlyVisibleState = formVisibleOnPage ? (
    <NewFoodForm onNewFoodCreation={handleAddingNewFood} />
  ) : (
    <div>Item saved!</div>
  );

  const handleDeleteSelectedFood = async () => {
    const user = auth.currentUser;
    if (!user) {
      setErrorMessage("User not logged in.");
      return;
    }

    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userFoodsCollectionRef = collection(userDocRef, "foods");

    try {
      await deleteDoc(doc(userFoodsCollectionRef, selectedFoodId));
      setSelectedFoodId("");
      setFoodDocs((prevDocs) =>
        prevDocs.filter((doc) => doc.id !== selectedFoodId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <StyledWrapper>
        {" "}
        {auth.currentUser == null ? (
          <React.Fragment>
            {errorMessage && <div>{errorMessage}</div>}
          </React.Fragment>
        ) : (
          <ManageBox>
            <BoxHeader>
              <HeaderDiv>
                <img
                  src={salad}
                  alt="My image"
                  style={{ width: "30px", height: "auto" }}
                />
                <HeaderTitle
                  style={{
                    fontFamily: "'Playfair Display', sans-serif",
                    fontSize: "1.3rem",
                    letterSpacing: "0.04rem",
                    marginLeft: "5px",
                  }}
                >
                  Add new items to your list.
                </HeaderTitle>
              </HeaderDiv>
            </BoxHeader>
            <Content>
              {currentlyVisibleState}
              <DeleteBox>
                Your current items:
                <select
                  className="dropdown"
                  value={selectedFoodId}
                  onChange={(e) => setSelectedFoodId(e.target.value)}
                >
                  {foodDocs.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.data.name}
                    </option>
                  ))}
                </select>
                <Button onClick={handleDeleteSelectedFood}>Delete</Button>
              </DeleteBox>
            </Content>
          </ManageBox>
        )}
      </StyledWrapper>
    </div>
  );
}

export default AddItems;
