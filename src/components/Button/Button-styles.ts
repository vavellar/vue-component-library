import styled from 'vue3-styled-components';


const StyledButton = styled('button')`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  cursor: pointer;
  border-radius: 3px;
  
  &.primary {
    background: palevioletred;
    color: white;
  }

  &.secundary {
    background: white;
    color: palevioletred;
  }

  &.terciary {
    background: green;
    color: black;
  }
`;

export default StyledButton;