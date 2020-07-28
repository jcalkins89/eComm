import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndRegistrationPage = () => {
  return (
    <SignInAndRegistrationContainer>
      <SignIn />
    </SignInAndRegistrationContainer>
  );
};

export default SignInAndRegistrationPage;

const SignInAndRegistrationContainer = styled.div``;
