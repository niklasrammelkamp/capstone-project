import styled from "styled-components";
import { useState } from "react";

export default function Textarea({
  id,
  label,
  isRequired = false,
  maxLength,
  defaultValue,
}) {
  const [inputFocus, setInputFocus] = useState(false);

  // didn't write this autoResize function by my own but I don't know anymore where I got this from
  function autoResize(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + 10 + "px";
  }

  return (
    <StyledTextareaWrapper>
      <StyledLabel htmlFor={id} focus={inputFocus}>
        {label}
      </StyledLabel>
      <StyledTextarea
        id={id}
        name={id}
        rows={1}
        required={isRequired}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onFocus={() => setInputFocus(true)}
        onBlur={(event) => {
          if (event.target.value) {
            setInputFocus(true);
          } else {
            setInputFocus(false);
          }
        }}
        onInput={(event) => {
          autoResize(event);
          setInputFocus(true);
        }}
      />
    </StyledTextareaWrapper>
  );
}

const StyledTextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  overflow-y: hidden;
  width: 100%;
  border: none;
  border-radius: 2rem;
  padding: 1.4rem 1.5rem 0 1.5rem;
  height: 4rem;

  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  color: var(--grey);

  position: absolute;
  left: 1.5rem;
  top: ${({ focus }) => (focus ? "0.98rem" : "46%")};
  transform: translateY(-50%);

  transition: 0.4s ease;
  font-size: ${({ focus }) => (focus ? "0.8rem" : "1rem")};
`;
