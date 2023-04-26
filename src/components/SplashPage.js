import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  font-size: 8pt;
  text-align: center;
  line-height: 25pt;
  color: #ffffff;
  width: 300px;
  padding-bottom: 10px;
  border-bottom: solid .8px #ffffff;

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
  font-size: 30pt;
  align-self: center;
`;


function SplashPage() {
  return (
   
    <div className="content">
       <StyledWrapper>
          <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "5rem"}}>
            Feels good</HeaderTitle><br />
            <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "3.5rem"}}>
            to fuel better.</HeaderTitle><br />
          <span>Discover your balance, keep track of it.</span><br />
          <Link to="/signup"> <Button>Start tracking</Button></Link>
          </StyledWrapper>
    </div>
   
  );
}

export default SplashPage;
