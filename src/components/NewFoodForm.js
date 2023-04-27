import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { db , auth , app , getDb } from './../firebase.js'
import { collection, addDoc , setDoc, doc, getDoc , getDocs , } from "firebase/firestore";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  color: #8cc895;
  background: #447cfc;
  border: none;
  border-bottom: solid 0.8px #e6edff;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

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
padding: 10px;
background: #447cfc;
margin-top: -30px;
gap: 20px;

`;

const NewFoodFormBox = styled.div`
width: 200px;
display: flex;
flex-direction: row;
background: #447cfc;
color: #ffffff;
padding: 5px;
border: #e6edff solid .8px;
border-radius: 0pt;
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
padding: 8px;
margin-bottom: 18px;
`;

const Button = styled.button`
background-color: #ffffff;
font-size: 7pt;
width: 80px;
height: auto;
border: solid .8px #ffffff;
border-radius: 16pt;
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

const HeaderTitle = styled.span`
  font-size: 20pt;
`;


function NewFoodForm(props) {
  const [foodItems, setFoodItems] = useState([]);

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

  function handleNewFoodFormSubmission(event) {
    event.preventDefault();
    const newFoodData = {
      name: event.target.name.value,
      calories: parseInt(event.target.calories.value),
      protein: parseInt(event.target.protein.value),
      fat: parseInt(event.target.fat.value),
      carbs: parseInt(event.target.carbs.value),
    };
    props.onNewFoodCreation(newFoodData);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>You must be signed in to add new items.</React.Fragment>
    );
  } else if (auth.currentUser != null) {
 
    return (
      <StyledWrapper>
                   <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "1.2rem"}}>
            Add new items to your list.</HeaderTitle> 
            <select>{foodOptions}</select>

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
                <Input type="text" name="name" placeholder="Morning Shake" />
                <br />
                <Input type="number" name="calories" placeholder="0" />
                <br />
                <Input type="number" name="protein" placeholder="0" />
                <br />
                <Input type="number" name="fat" placeholder="0" />
                <br />
                <Input type="number" name="carbs" placeholder="0" />
                <Button
                  type="submit"
                >
                  Save
                </Button>
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