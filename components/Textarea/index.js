import styled from "styled-components";

export default function Textarea({
  id,
  label,
  isRequired = false,
  maxLength,
  defaultValue,
}) {
  // didn't write this autoResize function by my own but I don't know anymore where I got this from
  function autoResize(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + 2 + "px";
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledTextarea
        id={id}
        name={id}
        onInput={autoResize}
        rows={1}
        required={isRequired}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </>
  );
}

const StyledTextarea = styled.textarea`
  resize: none;
  overflow-y: hidden;
  padding: 5px 10px;
  height: 28px;
`;
