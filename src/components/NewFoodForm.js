import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { db, auth, } from "./../firebase.js";

import {
  collection,
  addDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  color: #8cc895;
  background: #447cfc;
  border: none;
  border-bottom: solid 0.8px #e6edff;
  font-size: 12pt;

  &::placeholder {
    color: #c2cff4; 
  }
  &:focus, &:active {
    outline: none;
    border-bottom: solid 0.8px #e6edff;    &::placeholder {
      color: #5789fb;    
      background: #447cfc;

    }
  
    &:not(:placeholder-shown) {
      color: #b3ff57;
      background-color: #447cfc;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  background: #447cfc;
  gap: 13px;
`;

const NewFoodFormBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  background: #447cfc;
  color: #ffffff;
  padding: 7px;
  border: #e6edff solid 0.8px;
  border-radius: 0pt;
  font-size: 12pt;
`;

const LeftColumn = styled.div`
  order: 1;
  width: 30%;
`;

const RightColumn = styled.div`
  order: 2;
  width: 70%;
`;

const LeftColumnRow = styled.div`
  color: #ffffff;
  background: #447cfc;
  text-align: right;
  padding: 6px;
  margin-bottom: 13px;
`;

const RightColumnRow = styled.div`
  color: #ffffff;
  background: #447cfc;
  text-align: right;
  padding: 3px;
  margin-bottom: 0px;
`;

const Button = styled.button`
background-color: #ffffff;
font-size: 12pt;
width: 100px;
height: auto;
border: solid .8px #ffffff;
border-radius: 16pt;
margin-top: 20px;
margin-bottom: 10px;
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

function NewFoodForm(props) {

  useEffect(() => {
    const user = auth.currentUser;
    const uid = user.uid;
    const userDocRef = doc(db, "users", uid);
    const userFoodsCollectionRef = collection(userDocRef, "foods");

    getDocs(userFoodsCollectionRef)
      .then((querySnapshot) => {
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function handleNewFoodFormSubmission(event) {
    event.preventDefault();
    const newFoodData = {
      name: event.target.name.value,
      calories: parseInt(event.target.calories.value),
      protein: parseInt(event.target.protein.value),
      fat: parseInt(event.target.fat.value),
      carbs: parseInt(event.target.carbs.value),
    };
    const docRef = await addDoc(collection(db, "foods"), newFoodData); // add the new food document to the "foods" collection and obtain the DocumentReference object
    const docId = docRef.id; // obtain the document ID from the DocumentReference object
    props.onNewFoodCreation(newFoodData, docId);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>You must be signed in to add new items.</React.Fragment>
    );
  } else if (auth.currentUser != null) {
    return (
      <StyledWrapper>
        <NewFoodFormBox>
          <LeftColumn>
            <LeftColumnRow>Name:</LeftColumnRow>
            <LeftColumnRow>Calories:</LeftColumnRow>
            <LeftColumnRow>Protein:</LeftColumnRow>
            <LeftColumnRow>Fat:</LeftColumnRow>
            <LeftColumnRow>Carbs:</LeftColumnRow>
          </LeftColumn>

          <RightColumn>
            <form onSubmit={handleNewFoodFormSubmission}>
              <RightColumnRow>
                <Input type="text" name="name" placeholder="Banana Smoothie" />
              </RightColumnRow>
              <RightColumnRow>
                {" "}
                <Input type="number" name="calories" placeholder="0" />
              </RightColumnRow>
              <RightColumnRow>
                <Input type="number" name="protein" placeholder="0" />
              </RightColumnRow>
              <RightColumnRow>
                <Input type="number" name="fat" placeholder="0" />
              </RightColumnRow>
              <RightColumnRow>
                <Input type="number" name="carbs" placeholder="0" />
              </RightColumnRow>
              <Button type="submit">Save</Button>
            </form>
          </RightColumn>
        </NewFoodFormBox>
      </StyledWrapper>
    );
  }
}

NewFoodForm.propTypes = {
  onNewFoodCreation: PropTypes.func,
};

export default NewFoodForm;
