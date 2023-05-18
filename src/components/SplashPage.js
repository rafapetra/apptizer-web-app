import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  width: 100%;
  background: #447cfc;
`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: underline;
`;

const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
background-color: #ffffff;
font-size: 14pt;
width: 180px;
height: auto;
border: solid 1px #ffffff;
border-radius: 16pt;
margin-bottom: 55px;
color: #000000;
padding: 8px;

&:hover {
  background-color: #447cfc; 
  cursor: pointer;
  border: solid 1px #ffffff;
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
`;

const HeaderTitle = styled.span`
  font-size: 20pt;
  align-self: center;


  @media screen and (max-width: 1150px) {
    font-size: 15pt;
  }
`;

const HeaderContent = styled.div`
  font-size: 13pt;
  align-self: center;
  width: 50%;
  align-self: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  direction: row;
  background: #447cfc;
  width: 90%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 5px;

  @media screen and (max-width: 1150px) {
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 3px;


  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BoxOne = styled.span`
  order: 0;
  display: flex;
  flex-direction: column;
  min-width: 450px;
  height: auto;
  background: #447cfc;
  padding: 20px;
  text-align: left;
  gap: 13px;
  border-right: solid 1px #ffffff;

  @media screen and (max-width: 1150px) {
    min-width: 100px;
    max-width: 300px;

    border-right: solid 1px #ffffff;
  }

  @media screen and (max-width: 650px) {
    min-width: 400px;
    border-bottom: solid 1px #ffffff;
    border-right: solid 0px #ffffff;
  }
`;

const BoxTwo = styled.span`
  order: 1;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  background: #447cfc;
  padding: 20px;
  text-align: left;
  gap: 13px;

  @media screen and (max-width: 1150px) {
    width: 450px;

    @media screen and (max-width: 650px) {
      min-width: 400px;
    }
  }
  
`;

const BoxTitle = styled.div``;

const BoxOneText = styled.span`
  margin-top: 10px;
  margin: 10px;
  font-size: 12pt;
`;

function SplashPage() {
  return (
    <StyledWrapper>
      <Content>
        <HeaderTitle
          style={{
            fontFamily: "'Playfair Display', sans-serif",
            fontSize: "6.5rem",
          }}
        >
          Feels good
        </HeaderTitle>
        <br />
        <HeaderTitle
          style={{
            fontFamily: "'Playfair Display', sans-serif",
            fontSize: "4.8rem",
          }}
        >
          to fuel better.
        </HeaderTitle>
        <br />
        <HeaderContent>
          Achieve your desired fitness and health outcomes with the perfect
          balance of protein, carbohydrates, and fats for your body.
        </HeaderContent>
        <br />
        <Link to="/signup">
          {" "}
          <Button>Start tracking</Button>
        </Link>
        <Hr></Hr>
      </Content>

      <Container>
        <BoxOne>
          <BoxTitle
            style={{
              fontFamily: "'Playfair Display', sans-serif",
              fontSize: "2.2rem",
            }}
          >
            Discover your balance.
          </BoxTitle>
          <BoxOneText>
            <p>Find out your macronutrient balance with a Macro Calculator.</p>
            <br />
            <StyledLink href="https://www.calculator.net/macro-calculator.html">
              Macros Calculator
            </StyledLink>
          </BoxOneText>
        </BoxOne>

        <BoxTwo>
          <BoxTitle
            style={{
              fontFamily: "'Playfair Display', sans-serif",
              fontSize: "2.2rem",
            }}
          >
            What are macronutrients?
          </BoxTitle>
          <BoxOneText>
            <p>
              Macros, short for macronutrients, are the vital nutrients your
              body requires in larger quantities to thrive. As the name
              suggests, they play a significant role in providing your body with
              the energy it needs, measured in calories or kilocalories (kcals).
            </p>{" "}
            <br />
            <p>
              There are three key types of macronutrients: carbohydrates,
              proteins, and fats.{" "}
            </p>{" "}
            <br />{" "}
            <StyledLink href="https://www.webmd.com/diet/what-are-macronutrients">
              Learn More
            </StyledLink>
          </BoxOneText>
        </BoxTwo>
        
      </Container>

    </StyledWrapper>
  );
}

export default SplashPage;
