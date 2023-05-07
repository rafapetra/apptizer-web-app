import styled from "styled-components";

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
  background-color: #447cfc;
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
  margin-right: 100px;
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
  TotalBoxFat
};