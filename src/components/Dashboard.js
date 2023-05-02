import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth } from "./../firebase.js";
import { db } from "./../firebase.js";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const StyledWrapper = styled.div`
  font-size: 8pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  margin-top: 10px;
  margin-left: 20px;
  padding-bottom: 10px;
  background-color: #447cfc;
  &:hover a {
    text-decoration: none;
  }
`;

const Button = styled.button`
background-color: #ffffff;
font-size: 7pt;
width: 60px;
border: solid .8px #ffffff;
border-radius: 16pt;
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

const DeleteButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 8px;
height: 15px;
background-color: #ffffff;
font-size: 7pt;
width: 60px;
border: solid .8px #ffffff;
border-radius: 16pt;
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

const Macros = styled.div`
  border: solid 0px #e6edff;
  width: 400px;
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
  padding-bottom: 0px;
  background: #447cfc;
  &:hover a {
    text-decoration: none;
  }
`;

const MacrosBoxHeader = styled.div`
  order: 0;
  background: #447cfc;
  color: #000000;
  display: flex;
  text-align: center;
`;

const MacrosBoxHeaderTime = styled.div`
  order: 0;
  background: #447cfc;
  color: #e6edff;
  display: flex;
  width: 50px;
  text-align: center;
  justify-content: center;
`;

const MacrosBoxHeaderName = styled.div`
  order: 1;
  background: #5789fb;
  color: #e6edff;
  display: flex;
  width: 100px;
  justify-content: center;
`;

const MacrosBoxHeaderCalories = styled.div`
  order: 2;
  background: #6996fc;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderProtein = styled.div`
  order: 2;
  background: #5789fb;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderCarbs = styled.div`
  order: 3;
  background: #6996fc;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderFat = styled.div`
  order: 4;
  background: #5789fb;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;

const MacrosBoxContent = styled.div`
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #5789fb;
  color: #0e1932;
`;

const MacrosBoxContentTime = styled.div`
  order: 0;
  background-color: #447cfc;
  color: #e6edff;
  width: 50px;
  text-align: center;
`;

const MacrosBoxContentName = styled.div`
  order: 1;
  background-color: #7ca3fc;
  width: 100px;
  text-align: center;
`;

const MacrosBoxContentCalories = styled.div`
  order: 2;
  background-color: #8fb0fd;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentProtein = styled.div`
  order: 3;
  background-color: #7ca3fc;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentCarbs = styled.div`
  order: 4;
  background-color: #8fb0fd;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentFat = styled.div`
  order: 5;
  background-color: #7ca3fc;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentDelete = styled.div`
  order: 6;
  background-color: #447cfc;;
  width: 80px;
`;

const TotalBox = styled.div`
  background-color: #447cfc;
  order: 2;
  display: flex;
  flex-direction: row;
`;

const TotalBoxTotal = styled.div`
  background-color: #447cfc;
  width: 50px;
  order: 0;
  margin-right:100px;
  text-align: center;

`;

const TotalBoxCalories = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 1;
  margin-left: 0px;
  text-align: center;

`;

const TotalBoxProtein = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 2;
  text-align: center;

`;

const TotalBoxCarbs = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 3;
  text-align: center;

`;

const TotalBoxFat = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 4;
  text-align: center;

`;

function Dashboard() {
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [macroDivs, setMacroDivs] = useState([]);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

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
          <MacrosBoxContentTime>
            {" "}
            {new Date(timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              hourCycle: "h12",
            })}
          </MacrosBoxContentTime>
          <MacrosBoxContentName>{foodDoc.data.name}</MacrosBoxContentName>
          <MacrosBoxContentCalories>
            {foodDoc.data.calories}
          </MacrosBoxContentCalories>
          <MacrosBoxContentProtein>
            {foodDoc.data.protein}
          </MacrosBoxContentProtein>
          <MacrosBoxContentCarbs>{foodDoc.data.carbs}</MacrosBoxContentCarbs>
          <MacrosBoxContentFat>{foodDoc.data.fat}</MacrosBoxContentFat>
          <MacrosBoxContentDelete>
            <DeleteButton onClick={() => handleDeleteMacroDiv(foodDoc.id)}>
              Delete
            </DeleteButton>
          </MacrosBoxContentDelete>
        </MacrosBoxContent>
      </Macros>,
    ]);

    const handleDeleteMacroDiv = (id) => {
      setMacroDivs((prevMacroDivs) =>
        prevMacroDivs.filter((div) => div.key !== id)
      );
    };

    setTotalProtein((prevTotal) => prevTotal + foodDoc.data.protein); // update total protein
    setTotalCalories((prevTotal) => prevTotal + foodDoc.data.calories);
    setTotalCarbs((prevTotal) => prevTotal + foodDoc.data.carbs);
    setTotalFat((prevTotal) => prevTotal + foodDoc.data.fat);
  };

  return (
    <StyledWrapper>
      {auth.currentUser == null ? (
        <React.Fragment>
          {errorMessage && <div>{errorMessage}</div>}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <HeaderTitle
            style={{
              fontFamily: "'Playfair Display', sans-serif",
              fontSize: "1.5rem",
              letterSpacing: "0.07rem",
            }}
          >
            Dashboard
          </HeaderTitle>

          <MacrosBox>
            <MacrosBoxHeader>
              <MacrosBoxHeaderTime>TIME</MacrosBoxHeaderTime>
              <MacrosBoxHeaderName>Name</MacrosBoxHeaderName>
              <MacrosBoxHeaderCalories>Calories</MacrosBoxHeaderCalories>
              <MacrosBoxHeaderProtein>Protein</MacrosBoxHeaderProtein>
              <MacrosBoxHeaderCarbs>Carbs</MacrosBoxHeaderCarbs>
              <MacrosBoxHeaderFat>Fat</MacrosBoxHeaderFat>
            </MacrosBoxHeader>
            {macroDivs}
            <TotalBox>
              <TotalBoxTotal>
              Total:
              </TotalBoxTotal> 
              <TotalBoxCalories>
              {totalCalories}
              </TotalBoxCalories>
              <TotalBoxProtein>
               {totalProtein}
              </TotalBoxProtein>
              <TotalBoxCarbs>
               {totalCarbs}
              </TotalBoxCarbs>  
              <TotalBoxFat>
              {totalFat}
              </TotalBoxFat>{" "}
            </TotalBox>{" "}
            {/* display total protein */}
          </MacrosBox>

          <select className="dropdownDashboard" onChange={handleFoodChange}>
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
