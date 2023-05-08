import React, { useState } from "react";
import { auth , db } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, updateProfile,
} from "firebase/auth";
import styled from "styled-components";
import SplashPage from "./SplashPage.js";


const StyledWrapper = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;

const SignUpBox = styled.div`
  order: 1;
  padding: 15px;
  height: auto;
  background-color: #a7f547
  font-size: 7pt;
  margin: 8px;
  align-items: center;

`;

const Header = styled.h1`
  font-size: 10pt;
  text-align: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  color: #8cc895;
  background: #447cfc;
  border: none;
  border-bottom: solid 0.8px #e6edff;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;


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
function SignUp() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      const displayName = name; // set the user's display name to the entered name
      updateProfile(user, { displayName }) // update the user's profile with the new display name
        .then(() => {
          setSignUpSuccess(`Welcome to Apptize, ${name}!`);
        })
        .catch((error) => {
          setSignUpSuccess(`There was an error signing up: ${error.message}!`);
        });
    })
    .catch((error) => {
      setSignUpSuccess(`There was an error signing up: ${error.message}!`);
    });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  if (auth.currentUser == null) {
    return (
      <StyledWrapper>
        <SignUpBox>
          <Header>It's free.</Header>
          <form onSubmit={doSignUp}>
  <Input type="text" name="name" placeholder="name" /><br />
  <Input type="text" name="email" placeholder="email"/><br />
  <Input type="password" name="password" placeholder="password" /><br />
  <ButtonContainer>
  <Button type="submit">Sign up</Button>
</ButtonContainer>
</form>
        </SignUpBox>
      </StyledWrapper>
    );
  } else if (auth.currentUser != null) {
    return (
      <StyledWrapper>
        <SignUpBox>
          {signUpSuccess}
          <br />
          <Button onClick={doSignOut}>Sign out</Button>
        </SignUpBox>
      </StyledWrapper>
    );
    } else {
    return (
      <React.Fragment>
        <SplashPage />
      </React.Fragment>
    );
  }
}

export default SignUp;