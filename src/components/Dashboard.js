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
border: solid 0.0px #e6edff;
  width: 300px;
  padding: 0px;
`;

const MacrosBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 8pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  margin-top: 0px;
  margin-left: 0px;
  padding-bottom: 10px;
  background-color: #000000;
  &:hover a {
    text-decoration: none;
  }
`;

const MacrosBoxHeader = styled.div`
order: 0;
background: #0fffff;
color: #000000;
display: flex;
text-align: center;
`;

const MacrosBoxHeaderTime = styled.div`
order: 0;
background: #CCCCCC;
color: #000000;
display: flex;
width: 40px;
text-align: center;
justify-content: center;

`;

const MacrosBoxHeaderName = styled.div`
  order: 1;
  background: #dddddd;
  color: #000000;
  display: flex;
  width: 90px;
  justify-content: center;
`;

const MacrosBoxHeaderCalories = styled.div`
order: 2;
background: #eeeeee;
color: #000000;
display: flex;
width: 42.5px;
justify-content: center;

`;
const MacrosBoxHeaderProtein = styled.div`
order: 2;
background: #eeeeee;
color: #000000;
display: flex;
width: 42.5px;
justify-content: center;

`;
const MacrosBoxHeaderCarbs = styled.div`
order: 3;
background: #eeeeee;
color: #000000;
display: flex;
width: 42.5px;
justify-content: center;

`;
const MacrosBoxHeaderFat = styled.div`
order: 4;
background: #ffffff;
color: #000000;
display: flex;
width: 42.5px;
justify-content: center;

`;

const MacrosBoxContent = styled.div`
order: 1;
width: 100%;
flex-direction: row;
background-color: #ffffff;
color: #000000;
`;


function Dashboard() {
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [macroDivs, setMacroDivs] = useState([]);
  const [totalProtein, setTotalProtein] = useState(0); 

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

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  const handleAddMacroDiv = () => {
    if (!selectedFood) {
      return;
    }
    const foodDoc = foodDocs.find((doc) => doc.id === selectedFood);
    if (!foodDoc) {
      return;
    }

    const timestamp = Date.now(); // get the current timestamp in milliseconds
    
    setMacroDivs((prevMacroDivs) => [
      ...prevMacroDivs,
      <Macros key={foodDoc.id}>
       <MacrosBoxContent>
        {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, hourCycle: 'h12' })}
        {foodDoc.data.name}
        {foodDoc.data.protein}
        </MacrosBoxContent>
        </Macros>,
    ]);

    setTotalProtein((prevTotal) => prevTotal + foodDoc.data.protein); // update total protein

  };

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

<MacrosBox>
            <MacrosBoxHeader>
              <MacrosBoxHeaderTime>
                TIME
              </MacrosBoxHeaderTime>
              <MacrosBoxHeaderName>
                Name
              </MacrosBoxHeaderName>
              <MacrosBoxHeaderCalories>
                Calories
              </MacrosBoxHeaderCalories>
              <MacrosBoxHeaderProtein>
                Protein
              </MacrosBoxHeaderProtein>
              <MacrosBoxHeaderCarbs>
                Carbs
              </MacrosBoxHeaderCarbs>
              <MacrosBoxHeaderFat>
                Fat
              </MacrosBoxHeaderFat>
            </MacrosBoxHeader>
          {macroDivs}
          <div>Total Protein: {totalProtein}</div> {/* display total protein */}
          </MacrosBox>
        
       
          <select onChange={handleFoodChange}>
            <option value="">Select a food item</option>
            {foodDocs.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.data.name}
              </option>
            ))}
          </select>
          <Button onClick={handleAddMacroDiv}>Add</Button>
        </React.Fragment>
      )}
    </StyledWrapper>
  );
}

export default Dashboard;  