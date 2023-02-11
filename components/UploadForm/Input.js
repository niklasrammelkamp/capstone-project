import css from "styled-jsx/css";
import styled from "styled-components";
import SVGIcon from "../SVGIcon";
import { useEffect, useState } from "react";

export default function Input({
  name,
  value = null,
  onChange = null,
  noCategoriesSelected = null,
  required = false,
  svg,
  label,
  maxLength = null,
}) {
  const [inputFocus, setInputFocus] = useState(false);
  console.log("hier", value);

  useEffect(() => {
    if (!value) setInputFocus(false);
  }, [value]);

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name} focus={inputFocus}>
        {svg && <SVGIcon variant={svg} />}
        {label}
      </StyledLabel>
      <StyledInput
        type="text"
        id={name}
        name={name}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        noCategoriesSelected={noCategoriesSelected}
        focus={inputFocus}
        required={required}
        onFocus={() => setInputFocus(true)}
        onBlur={(event) => {
          if (event.target.value) {
            console.log("hallo", event.target.value);
            setInputFocus(true);
          } else {
            setInputFocus(false);
          }
        }}
        onInput={() => setInputFocus(true)}
      />
    </StyledInputWrapper>
  );
}

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  color: var(--grey);
  position: absolute;
  left: 1.5rem;
  top: ${({ focus }) => (focus ? "0.98rem" : "50%")};
  font-size: ${({ focus }) => (focus ? "0.8rem" : "1rem")};
  transform: translateY(-50%);
  transition: 0.5s ease;
  display: flex;
  gap: ${({ focus }) => (focus ? "0" : "0.5rem")};

  svg {
    transition: 0.4s ease;
    opacity: ${({ focus }) => (focus ? "0" : "1")};
    width: ${({ focus }) => (focus ? "0" : "1rem")};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 8rem;
  font-family: "Poppins";
  padding: 0.8rem 5rem 0 1.5rem;
  height: 4rem;

  ${({ focus, noCategoriesSelected }) => {
    return focus || noCategoriesSelected
      ? `border: 2px solid ${
          noCategoriesSelected ? "var(--red)" : "var(--green)"
        };`
      : "border: none;";
  }}

  transition: 0.2s ease;

  &:focus {
    outline: none;
  }
`;
