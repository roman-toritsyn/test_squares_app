import styled from "styled-components"

export const StyledSelect = styled.select`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #055C9D;
  line-height: 1.3;
  padding: 0.25rem 1rem;
  width: 9rem;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #055C9D;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5rem;
  background-color: #FFFFFF;
  transition-duration: 0.33s;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
    background-color: #055C9D;
  }
  
  &:focus {
    background-color: rgba(5, 92, 157, 0.8);
    outline: none;
    color: #FFFFFF;
    border-color: rgba(5, 92, 157, 0.8);
  }
`
