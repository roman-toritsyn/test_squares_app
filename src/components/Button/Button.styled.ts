import styled from "styled-components"

export const ButtonWrapper = styled.div`
  width: max-content;
  padding: 0.25rem 1rem;
  box-sizing: border-box;
  color: #FFFFFF;
  background-color: #055C9D;
  border-radius: 0.5rem;
  border: 1px solid #055C9D;
  transition-duration: 0.33s;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  cursor: pointer;
  animation: appearence 0.33s linear;

  @keyframes appearence {
    from { opacity: 0 }
    to { opacity: 1 }
  }
  
  &:hover {
    color: #055C9D;
    background-color: #FFFFFF;
  }
  
  &:focus {
    background-color: rgba(5, 92, 157, 0.8);
  }
`
