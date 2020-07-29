import React from "react";
import styled from "styled-components";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

type SignInComponentState = {
  email: string;
  password: string;
};

class SignIn extends React.Component<{}, SignInComponentState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </SignInContainer>
    );
  }
}
export default SignIn;

const SignInContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;
