import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    font-size: 8pt;
  text-align: center;
  line-height: 25pt;
  color: #ffffff;
  width: auto;
  padding-bottom: 10px;
  background-color: #447cfc;
  &:hover a {
    
    text-decoration: none;

  }
`;

const Content = styled.div`
margin: auto;
margin-left: 50%;
margin-top: 20px;
width: 100%;
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
  align-self: center;
`;


function SplashPage() {
  return (
   
       <StyledWrapper>
        <Content>
          <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "4.5rem"}}>
            Feels good</HeaderTitle><br />
            <HeaderTitle style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "3.2rem"}}>
            to fuel better.</HeaderTitle><br />
          <span>Discover your balance, keep track of it.</span><br />
          <Link to="/signup"> <Button>Start tracking</Button></Link>
          <Hr></Hr>
          </Content>
          </StyledWrapper>
   
  );
}

export default SplashPage;
