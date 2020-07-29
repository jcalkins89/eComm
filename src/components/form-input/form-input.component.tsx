// @ts-nocheck
import React from "react";
import styled, { css } from "styled-components";

interface FormInputProps {
  handleChange: (param: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...props }: FormInputProps) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        // TO DO: Fix TypeScript props so that this line doesn't throw error
        <FormInputLabel className={`${props.value.length ? "shrink" : ""}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
