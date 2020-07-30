// @ts-nocheck

import React from "react";
import styled from "styled-components";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

type SignUpState = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

class SignUp extends React.Component<{}, SignUpState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<Object> => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("There was an error: ", err);
    }
  };

  handleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <SignUpForm onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Display Name"
            type="text"
            value={displayName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </SignUpForm>
      </SignUpContainer>
    );
  }
}

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const SignUpForm = styled.form``;

const Title = styled.h2`
  margin: 10px 0;
`;
