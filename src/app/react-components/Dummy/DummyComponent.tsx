/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  border: 2px solid red;
  padding: 1rem;
  border-radius: 8px;
`;

const headingStyle = css`
  color: red;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const buttonStyle = css`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const DummyComponent = () => {
  return (
    <div css={containerStyle}>
      <h1 css={headingStyle}>I am a React Component</h1>
      <button css={buttonStyle}>Click Me</button>
    </div>
  );
};

export default DummyComponent;
