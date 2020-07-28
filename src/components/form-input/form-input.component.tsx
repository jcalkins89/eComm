import React from "react";
import styled from "styled-components";

import "./form-input.styles.scss";

// TO DO: Remove SASS and convert all styling to Styled-Components

const FormInput = ({
  handleChange,
  name,
  label,
  type,
  value,
  required,
  ...props
}: {
  handleChange: (param: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  type: string;
  required: boolean;
  value: string;
}) => {
  return (
    <Group className="group">
      <Input onChange={handleChange} {...props} className="form-input" />
      {label ? (
        <FormInputLabel
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;

const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

const Input = styled.input`
  .form-input {
    background: none;
    background-color: white;
    color: "#808080";
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #808080;
    margin: 25px 0;

    &:focus {
      outline: none;
    }
  }
`;

const FormInputLabel = styled.label`
  color: #808080;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: "#000000";
  }
`;
