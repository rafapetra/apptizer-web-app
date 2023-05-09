import styled from "styled-components";

const StyledWrapper = styled.div`
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
  margin-bottom: 18px;
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
  border-top: solid 0.5px #bedc90;

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
  gap: 2px;
  margin-top: 0px;
  margin-left: 0px;
  padding-bottom: 0px;
  &:hover a {
    text-decoration: none;
  }
`;

const GoalsBoxGoal = styled.div`
background-color: #447cfc;
width: 150px;
order: 0;
text-align: right;
font-size:10pt;
color:#bedc90;
padding-right: 10px;
`;

const GoalsBoxCal = styled.div`
background-color: #447cfc;
width: 42px;
order: 1;
text-align: left;
`;

const GoalsBoxProtein = styled.div`
background-color: #447cfc;
width: 42x;
order: 2;
text-align: left;
`;

const GoalsBoxCarbs = styled.div`
background-color: #447cfc;
width: 42px;
order: 3;
text-align: left;
`;

const GoalsBoxFat = styled.div`
background-color: #447cfc;
width: 42px;
order: 4;
text-align: left;
`;

const StyledMacroGoalInput = styled.input`
width: 42px;
height: 20px;
background-color: #447cfc;
border: solid 0.8px #bedc90;
padding: 2px;
font-size: 8pt;
color: #bedc90;
text-align: center;
&:active {
  border: solid 0.8px #e6edff;
}
&:focus {
  border: 0;
  background-color: #edd786;
  color: #000000

}
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
};