import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
    font-size: 8pt;
  text-align: center;
  color: #ffffff;
  width: 100%;
  background: #447cfc;
  &:hover a {
    
    text-decoration: none;

  }
`;

const Content = styled.div`
margin: auto;
margin-top: 20px;
margin-bottom: 10px;
width: 90%;
background: #447cfc;
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
width: 100%;
`

const HeaderTitle = styled.span`
  font-size: 20pt;
  align-self: center;
`;

const HeaderContent = styled.div`
  font-size: 7pt;
  align-self: center;
  width: 50%;
  align-self: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Container = styled.span`
display: flex;
direction: row;
background: #447cfc;
width: 90%;
margin: auto;
margin-top: 10px;
margin-bottom: 10px;
`;

const BoxOne = styled.span`
order: 1;
display: flex;
flex-direction: column;
width: 240px;
height: auto;
background: #447cfc;
padding: 10px;
text-align: left;
gap: 13px;
border-right: solid .8px #ffffff;

`;

const BoxTitle = styled.div`
`;

const BoxOneText = styled.span`
margin-top: 0px;
font-size: 7pt;
`;



function SplashPage() {
  return (
   
       <StyledWrapper>

        <Content>
          <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "5.5rem"}}>
            Feels good</HeaderTitle><br />
            <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "3.8rem"}}>
            to fuel better.</HeaderTitle><br />
          <HeaderContent>Achieve your desired fitness and health outcomes with the perfect balance of protein, carbohydrates, and fats for your body.</HeaderContent><br />
          <Link to="/signup"> <Button>Start tracking</Button></Link>
          <Hr></Hr>
          </Content>

          <Container>
            <BoxOne>
            <BoxTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "1.7rem"}}>
            Discover your balance.</BoxTitle>
            <BoxOneText>
            Discover your perfect macronutrient balance with a Macro Calculator. Estimate your specific needs based on age, physical characteristics, activity level, and bodyweight goals. </BoxOneText>
            </BoxOne>
            
            </Container>
            </StyledWrapper>
   
  );
}

export default SplashPage;
