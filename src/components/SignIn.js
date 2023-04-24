import React, { useState } from "react";
import { auth } from "./../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import styled from "styled-components";
import SplashPage from "./SplashPage.js";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;

const Header = styled.h1`
  font-size: 10pt;
  text-align: center;
  margin-bottom: 8px;
`;

const SignInBox = styled.div`
order: 1;
padding: 15px;
height: auto;
background-color: #a7f547
font-size: 7pt;
margin: 8px;
align-items: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  color: ${props => props.inputColor || "palevioletred"};
  background: #b3ff57;
  border: none;
  border-radius: 3px;

  &:focus, &:active {
    outline: none;
    border: 2px solid #b3bde8;

    &::placeholder {
      color: #000000;     
      background-color: #b3ff57;
    }
  
    &:not(:placeholder-shown) {
      color: #b3ff57;
      background-color: #b3ff57;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
background-color: #b3bde8;
font-size: 7pt;
width: 70px;
height: 18px;
border: solid .8px #000000;
margin-top: auto;
margin-bottom: auto;

&:hover {
  background-color: #a7f547; // Change background color on hover
  cursor: pointer; // Change cursor to pointer on hover

  &:active, focus {
    background-color: #ffffff; 
`;


function SignIn() {
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signInError, setSignInError] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const displayName = user.displayName; // get the user's display name
        setSignInSuccess(`Welcome back, ${displayName}!`);
      })
      .catch((error) => {
        setSignInError(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess("You have successfully signed out!");
      })
      .catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  if (auth.currentUser == null) {
    return (
      <StyledWrapper>
        <SignInBox>
          <Header>Welcome back.</Header>
          {signInSuccess}
          {signInError}
          <form onSubmit={doSignIn}>
            <Input type="text" name="email" placeholder="" />
            <Input
              type="password"
              name="password"
              placeholder=""
            />
            <ButtonContainer>
            <Button type="submit">Log In</Button>
              </ButtonContainer>
          </form>
        </SignInBox>
      </StyledWrapper>
    );
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment>
        <SignInBox>
          {signInSuccess}<br />
          <br />
          <ButtonContainer>
          <Button onClick={doSignOut}>Sign out</Button>
          </ButtonContainer>
        </SignInBox>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <SplashPage />
      </React.Fragment>
    );
      
  }
}

export default SignIn;
