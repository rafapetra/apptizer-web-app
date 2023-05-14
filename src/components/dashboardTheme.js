import styled from "styled-components";

const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
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

const ContainerOne = styled.div`
order: 0;
width: 400px;
background: #447cfc;
padding: 0px;
`;

const ContainerTwo = styled.div`
order: 1;
color: #ffffff;

background: #447cfc;
padding: 0px;
`;

const Button = styled.button`
background-color: #447cfc;
font-size: 7pt;
width: 60px;
border: solid .8px #ffffff;
border-radius: 16pt;
color: #ffffff;
height: 15px;
text-align: center;
&:hover {
  background-color: #ffffff; 
  cursor: pointer;
  border: solid .8px #ffffff;
  color: #000000;
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
background-color: #447cfc;
font-size: 7pt;
width: 60px;
border: solid .8px #ffffff;
border-radius: 16pt;
color: #ffffff;
&:hover {
  background-color: #ffffff;
  cursor: pointer;
  border: solid .8px #ffffff;
  color: #000000;
  transition: all 0.2s ease-in-out;
  &:active, focus {
    background-color: #b3ff57; 
    color: #000000;
  }
`;

const HeaderTitle = styled.div`
  font-size: 40pt;
  margin-bottom: 16px;
`;

const Macros = styled.div`
  border: solid 0px #000000;
  width: 400px;
  padding: 0px;
  font-size: 7pt;

`;

const MacrosBox = styled.div`
  display: flex;
    font-size: 7pt;
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
  font-size: 7.5pt;
  color: #e6edff;
  display: flex;
  width: 50px;
  text-align: center;
  justify-content: center;
`;

const MacrosBoxHeaderName = styled.div`
  order: 1;
  font-size: 7.5pt;
  background: #5886ff;
  color: #e6edff;
  display: flex;
  width: 100px;
  justify-content: center;
`;

const MacrosBoxHeaderCalories = styled.div`
  order: 2;
  font-size: 7.5pt;

  background: #6a94ff;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderProtein = styled.div`
  order: 2;
  font-size: 7.5pt;
  background: #5789fb;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderCarbs = styled.div`
  order: 3;
  font-size: 7.5pt;
  background: #6996fc;
  color: #e6edff;
  display: flex;
  width: 42.5px;
  justify-content: center;
`;
const MacrosBoxHeaderFat = styled.div`
  order: 4;
  font-size: 7.5pt;
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
  border-bottom: solid 1px #447cfc;
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
  background-color: #a2bcff;
  width: 100px;
  text-align: center;
`;

const MacrosBoxContentCalories = styled.div`
  order: 2;
  background-color: #b5c9ff;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentProtein = styled.div`
  order: 3;
  background-color: #a2bcff;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentCarbs = styled.div`
  order: 4;
  background-color: #b5c9ff;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentFat = styled.div`
  order: 5;
  background-color: #a2bcff;
  width: 42.5px;
  text-align: center;
`;

const MacrosBoxContentDelete = styled.div`
  order: 6;
  background-color: #447cfc;
  width: 80px;
`;

const TotalBox = styled.div`
  background-color: #447cfc;
  order: 2;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-bottom: solid 0.5px #bedc90;

`;

const DifferencesBox = styled.div`
  background-color: #447cfc;
  order: 2;
  display: flex;
  flex-direction: row;
  margin-top: 0px;

`;

const DifferencesBoxTotal = styled.div`
  background-color: #447cfc;
  width: 150px;
  order: 0;
  text-align: right;
  color:#f1d3d6;
  font-size:10pt;
  padding-right: 10px;

`;

const DifferencesBoxCalories = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 1;
  margin-left: 0px;
  text-align: center;
`;

const DifferencesBoxCarbs = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 3;
  text-align: center;
`;

const DifferencesBoxFat = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 4;
  text-align: center;
`;

const DifferencesBoxProtein = styled.div`
  background-color: #447cfc;
  width: 42.5px;
  order: 2;
  text-align: center;
`;

const TotalBoxTotal = styled.div`
  background-color: #447cfc;
  width: 150px;
  order: 0;
  text-align: right;
  color:#f1d3d6;
  font-size:10pt;
  padding-right: 10px;

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

const GoalsBox = styled.div`
  display: flex;
    font-size: 7pt;
  flex-direction: row;
  font-size: 10pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  gap: 27px;
  margin-top: 0px;
  margin-left: 0px;
  padding-bottom: 0px;
  &:hover a {
    text-decoration: none;
  }
  justify-content: center;
`;

const DailyHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10pt;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  gap: 5px;
  margin-top: 0px;
  margin-left: 0px;
  padding-bottom: 0px;
  &:hover a {
    text-decoration: none;
  }
  gap: 27px;
  justify-content: center;
`;

const GoalsBoxGoal = styled.div`
background-color: #447cfc;
width: 45px;
order: 0;
text-align: center;
font-size:10pt;
color:#bedc90;
padding-right: 9px;

`;

const GoalsBoxCal = styled.div`
background-color: #447cfc;
width: 42px;
order: 1;
text-align: center;
color: #fce945;
font-size: 9pt;
`;

const GoalsBoxProtein = styled.div`
background-color: #447cfc;
width: 42x;
order: 2;
text-align: center;
font-size: 9pt;
color: #fce945;

`;

const GoalsBoxCarbs = styled.div`
background-color: #447cfc;
width: 42px;
order: 3;
text-align: center;
font-size: 9pt;
color: #fce945;

`;

const GoalsBoxFat = styled.div`
background-color: #447cfc;
width: 42px;
order: 4;
text-align: center;
font-size: 9pt;
color: #fce945;

`;

const StyledMacroGoalInput = styled.input`
width: 42px;
height: 20px;
background-color: #447cfc;
border: solid 0.8px #7cfc45;
border-radius: 3.5px;
padding: 2px;
font-size: 8pt;
color: #7cfc45;
text-align: center;
&:active {
  border: solid 0.8px #e6edff;
}
&:focus {
  border: 0;
  background-color: #fce945;
  color: #000000

}
`;

const PantryBox = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  gap: 10px;
  margin-bottom: 17px;

`;

const DailyBox = styled.div`
order: 0;
width: 315px;
background: #447cfc;
border: solid 0.8px #c7d8fe;
border-radius: 6pt;
padding: 22px;
padding-top: 5px;
padding-bottom: 5px;
margin: 8px;
margin-bottom: 30px;
`;

const GraphBox = styled.div`
order: 1;
height: 210px;
width: 300px;
background: 447cfc;
font-size: 8pt;
`;


export {
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
  PantryBox,
  DifferencesBox,
  DifferencesBoxTotal,
  DifferencesBoxCalories,
  DifferencesBoxProtein,
  DifferencesBoxCarbs,
  DifferencesBoxFat,
  DailyBox,
  ContainerOne,
  DailyHeader,
  GraphBox,
  ContainerTwo,
};