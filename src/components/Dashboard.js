import React, { useState, useEffect ,  } from "react";
import styled from "styled-components";
import { auth } from "./../firebase.js";
import { db  } from './../firebase.js'
import { collection, addDoc , setDoc, doc, getDoc , getDocs , } from "firebase/firestore";

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

const Button = styled.button`
background-color: #ffffff;
font-size: 7pt;
width: 80px;
height: auto;
border: solid .8px #ffffff;
border-radius: 16pt;
margin-top: auto;
margin-bottom: 25px;
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

const Hr = styled.hr`
border: solid 0.5px #e6edff;
width: 50%;
margin-left:25% !important; margin-right:25% !important;"
`

const HeaderTitle = styled.span`
  font-size: 20pt;
`;

const Macros = styled.div`
border: solid 0.5px #e6edff;
  width: 300px;
  padding: 5px;
`;


function Dashboard() {
  const [foodItems, setFoodItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);

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

  return (
    <StyledWrapper>
      {auth.currentUser == null ? (
        <React.Fragment>
      {errorMessage && <div>{errorMessage}</div>}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <HeaderTitle style={{
            fontFamily: "'Playfair Display', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "0.07rem",
          }}>Dashboard</HeaderTitle>
          <Macros></Macros>
          <select>
              {foodDocs.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.data.name}
                </option>
              ))}
            </select>
        </React.Fragment>
      )}
    </StyledWrapper>
  );
}

export default Dashboard;  