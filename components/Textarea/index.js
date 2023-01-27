import styled from "styled-components";

export default function Textarea({ id, label }) {
  // didn't write this autoResize function by my own but I don't know anymore where I got this from
  function autoResize(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledTextarea id={id} name={id} onInput={autoResize} rows={1} />
    </>
  );
}

const StyledTextarea = styled.textarea`
  resize: none;
`;
