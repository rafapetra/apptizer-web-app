import React, { useState, } from "react";
import { auth } from "./../firebase.js";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  color: #ffffff;
  margin: auto;
  margin-top: 10px;
`;

const Header = styled.h1`
  font-size: 19pt;
  text-align: center;
  margin-bottom: 38px;
  color: #ffffff;
`;

const SignInBox = styled.div`
order: 1;
padding: 15px;
height: auto;
font-size: 12pt;
margin: 8px;
align-items: center;
color: #ffffff;
  gap: 10px;

`;

const Input = styled.input`
  font-size: 14pt;
  padding: 0.5em;
  margin: 0.5em;
  margin-bottom: 20px;
  width: 90%;
  color: #8cc895;
  background: #447cfc;
  border: none;
  border-bottom: solid 0.8px #e6edff;

  &::placeholder {
    color: #c2cff4; 
  }
  &:focus, &:active {
    outline: none;
    border-bottom: solid 0.8px #e6edff;    &::placeholder {
      color: #5789fb;    
      background: #447cfc;

    }
  
    &:not(:placeholder-shown) {
      color: #b3ff57;
      background-color: #447cfc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin: auto;
`;

const Button = styled.button`
background-color: #ffffff;
font-size: 12pt;
width: 100px;
height: auto;
border: solid .8px #ffffff;
border-radius: 16pt;
margin-top: 20px;
margin-bottom: 10px;
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


function SignIn() {
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signInError, setSignInError] = useState(null);

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
        setSignInSuccess(null);
        setSignInError(null);
      })
      .catch(function (error) {
        const errorMessage = `There was an error signing out: ${error.message}!`;
        setSignInError(errorMessage);
      });
  }

  if (auth.currentUser == null) {
    return (
      <StyledWrapper>
        <SignInBox>
          <Header>Welcome back.</Header>
          {signInError}
          <form onSubmit={doSignIn}>
            <Input type="text" name="email" placeholder="e-mail" />
            <Input
              type="password"
              name="password"
              placeholder="password"
            />
            <ButtonContainer>
              <Button type="submit">Log In</Button>
            </ButtonContainer>
          </form>
        </SignInBox>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper>
        {signInSuccess && (
          <React.Fragment>
            <p>{signInSuccess}</p>
            <Button onClick={doSignOut}>Sign out</Button>
          </React.Fragment>
        )}
        {!signInSuccess && (
          <React.Fragment>
            <Button onClick={doSignOut}>Sign out</Button>
          </React.Fragment>
        )}
      </StyledWrapper>
    );
  }
}

export default SignIn;
