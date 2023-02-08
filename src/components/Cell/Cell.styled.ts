import styled from "styled-components"

export const StyledCell = styled.div<{ isHighLighted: boolean }>`
  height: 3rem;
  width: 3rem;
  background-color: ${props => props.isHighLighted ? '#055C9D' : '#FFFFFF'};
  transition-duration: 0.33s;
`
