import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton: React.SFC<ButtonProps> = ({
  children,
  type,
  style,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <Button
      {...otherProps}
      className={`${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""}`}
      style={style}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.google-sign-in {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
