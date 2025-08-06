/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  border: 2px solid red;
  padding: 1rem;
  border-radius: 8px;
`;

const headingStyle = css`
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
  const handleClick = () => {
    console.log("React button clicked from inside Shadow DOM");
    alert("Button clicked!");
  };

  return (
    <div css={containerStyle}>
      <h1 css={headingStyle}>I am a React Component</h1>
      <button css={buttonStyle} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default DummyComponent;
