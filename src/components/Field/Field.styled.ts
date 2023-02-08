import styled from "styled-components"

export const StyledField = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(5, auto);
  border: 1px solid #003060;
  background-color: #003060;
  gap: 1px;
  animation: appearence 2s linear;
  
  @keyframes appearence {
    from { opacity: 0 }
    to { opacity: 1 }
  }
`
