import React, { useState, useEffect } from "react";
import { auth } from "./../firebase.js";
import { db } from "./../firebase.js";
import myImage from "../images/food.png";

import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import {
  StyledWrapper,
  Button,
  DeleteButton,
  HeaderTitle,
  Macros,
  MacrosBox,
  MacrosBoxHeader,
  MacrosBoxHeaderTime,
  MacrosBoxHeaderName,
  MacrosBoxHeaderCalories,
  MacrosBoxHeaderProtein,
  MacrosBoxHeaderCarbs,
  MacrosBoxHeaderFat,
  MacrosBoxContent,
  MacrosBoxContentTime,
  MacrosBoxContentName,
  MacrosBoxContentCalories,
  MacrosBoxContentProtein,
  MacrosBoxContentCarbs,
  MacrosBoxContentFat,
  MacrosBoxContentDelete,
  TotalBox,
  TotalBoxTotal,
  TotalBoxCalories,
  TotalBoxProtein,
  TotalBoxCarbs,
  TotalBoxFat,
  GoalsBox,
  GoalsBoxGoal,
  GoalsBoxCal,
  GoalsBoxProtein,
  GoalsBoxCarbs,
  GoalsBoxFat,
  StyledMacroGoalInput,
  PantryBox
} from "./dashboardTheme.js";

function Dashboard() {
  const [errorMessage, setErrorMessage] = useState("");
  const [foodDocs, setFoodDocs] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [macroDivs, setMacroDivs] = useState(
    JSON.parse(localStorage.getItem("macroDivs")) || []
  );
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [isClean, setIsClean] = useState(false);
  const [macroGoals, setMacroGoals] = useState(
    JSON.parse(localStorage.getItem("macroGoals")) || {
      protein: 0,
      calories: 0,
      carbs: 0,
      fat: 0,
    }
  );

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

  // Load macroDivs from localStorage when the component mounts
  useEffect(() => {
    const savedMacroDivs = JSON.parse(
      localStorage.getItem("macroDivs") || "[]"
    );
    setMacroDivs(savedMacroDivs);
  }, []);

  // Save macroDivs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("macroDivs", JSON.stringify(macroDivs));
  }, [macroDivs]);

  useEffect(() => {
    localStorage.setItem("macroGoals", JSON.stringify(macroGoals));
  }, [macroGoals]);

  useEffect(() => {
    // Calculate the total sum of each macro
    const totalProtein = macroDivs.reduce((acc, curr) => acc + curr.protein, 0);
    const totalCalories = macroDivs.reduce(
      (acc, curr) => acc + curr.calories,
      0
    );
    const totalCarbs = macroDivs.reduce((acc, curr) => acc + curr.carbs, 0);
    const totalFat = macroDivs.reduce((acc, curr) => acc + curr.fat, 0);

    // Update the state variables for the total sum of each macro
    setTotalProtein(totalProtein);
    setTotalCalories(totalCalories);
    setTotalCarbs(totalCarbs);
    setTotalFat(totalFat);
  }, [macroDivs]);

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

    const newMacroDiv = {
      id: foodDoc.id + timestamp,
      name: foodDoc.data.name,
      calories: foodDoc.data.calories,
      protein: foodDoc.data.protein,
      carbs: foodDoc.data.carbs,
      fat: foodDoc.data.fat,
      time: new Date(timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        hourCycle: "h12",
      }),
    };

    setMacroDivs([...macroDivs, newMacroDiv]);

    setTotalProtein((prevTotal) => prevTotal + foodDoc.data.protein); // update total protein
    setTotalCalories((prevTotal) => prevTotal + foodDoc.data.calories);
    setTotalCarbs((prevTotal) => prevTotal + foodDoc.data.carbs);
    setTotalFat((prevTotal) => prevTotal + foodDoc.data.fat);
  };

  const handleDeleteMacroDiv = (id) => {
    setMacroDivs((prevMacroDivs) =>
      prevMacroDivs.filter((div) => div.id !== id)
    );
  };

  
  const MacroGoalInput = ({ macro, value, onChange }) => {
    return (
      <label>
        <input type="number" value={value} onChange={onChange} />
      </label>
    );
  };

  const handleCleanMacroDivs = () => {
    setMacroDivs([]);
    setTotalProtein(0);
    setTotalCalories(0);
    setTotalCarbs(0);
    setTotalFat(0);
    setIsClean(true);
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

<PantryBox>
          <img src={myImage} alt="My image" style={{ width: "30px", height: "100%"}}/>

          <select className="dropdownDashboard" onChange={handleFoodChange}>
            <option value="">From your pantry:</option>
            {foodDocs.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.data.name}
              </option>
            ))}
          </select>
          <Button onClick={handleAddMacroDiv}>Add</Button>
  {macroDivs.length > 0 && (
    <Button onClick={handleCleanMacroDivs}>Clean</Button>
  )}          </PantryBox>

          <MacrosBox>
            <MacrosBoxHeader>
              <MacrosBoxHeaderTime></MacrosBoxHeaderTime>
              <MacrosBoxHeaderName>Name</MacrosBoxHeaderName>
              <MacrosBoxHeaderCalories>Calories</MacrosBoxHeaderCalories>
              <MacrosBoxHeaderProtein>Protein</MacrosBoxHeaderProtein>
              <MacrosBoxHeaderCarbs>Carbs</MacrosBoxHeaderCarbs>
              <MacrosBoxHeaderFat>Fat</MacrosBoxHeaderFat>
            </MacrosBoxHeader>
            {macroDivs.map((macroDiv) => (
              <Macros key={macroDiv.id}>
                <MacrosBoxContent>
                  <MacrosBoxContentTime>{macroDiv.time}</MacrosBoxContentTime>
                  <MacrosBoxContentName>{macroDiv.name}</MacrosBoxContentName>
                  <MacrosBoxContentCalories>
                    {macroDiv.calories}
                  </MacrosBoxContentCalories>
                  <MacrosBoxContentProtein>
                    {macroDiv.protein}
                  </MacrosBoxContentProtein>
                  <MacrosBoxContentCarbs>
                    {macroDiv.carbs}
                  </MacrosBoxContentCarbs>
                  <MacrosBoxContentFat>{macroDiv.fat}</MacrosBoxContentFat>
                  <MacrosBoxContentDelete>
                    <DeleteButton
                      onClick={() => handleDeleteMacroDiv(macroDiv.id)}
                    >
                      Delete
                    </DeleteButton>
                  </MacrosBoxContentDelete>
                </MacrosBoxContent>
              </Macros>
            ))}
            <TotalBox>
              <TotalBoxTotal>Total:</TotalBoxTotal>
              <TotalBoxCalories>{totalCalories}</TotalBoxCalories>
              <TotalBoxProtein>{totalProtein}</TotalBoxProtein>
              <TotalBoxCarbs>{totalCarbs}</TotalBoxCarbs>
              <TotalBoxFat>{totalFat}</TotalBoxFat>{" "}
            </TotalBox>{" "}
            {/* display total protein */}
            
          </MacrosBox>

          <GoalsBox>
            <GoalsBoxGoal>Goals:</GoalsBoxGoal>

            <GoalsBoxCal>
              <StyledMacroGoalInput
                macro="Calories"
                value={macroGoals.calories}
                onChange={(event) =>
                  setMacroGoals({
                    ...macroGoals,
                    calories: Number(event.target.value),
                  })
                }
              />
            </GoalsBoxCal>

            <GoalsBoxProtein>
              <StyledMacroGoalInput
                macro="Protein"
                value={macroGoals.protein}
                onChange={(event) =>
                  setMacroGoals({
                    ...macroGoals,
                    protein: Number(event.target.value),
                  })
                }
              />
            </GoalsBoxProtein>

            <GoalsBoxCarbs>
              <StyledMacroGoalInput
                macro="Carbs"
                value={macroGoals.carbs}
                onChange={(event) =>
                  setMacroGoals({
                    ...macroGoals,
                    carbs: Number(event.target.value),
                  })
                }
              />
            </GoalsBoxCarbs>

            <GoalsBoxFat>
              <StyledMacroGoalInput
                macro="Fat"
                value={macroGoals.fat}
                onChange={(event) =>
                  setMacroGoals({
                    ...macroGoals,
                    fat: Number(event.target.value),
                  })
                }
              />
            </GoalsBoxFat>
          </GoalsBox>
        </React.Fragment>
      )}
    </StyledWrapper>
  );
}

export default Dashboard;
