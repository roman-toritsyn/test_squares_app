import { ISelect } from "./Select.types"
import { TMode } from "../../contexts/Modes.types"
import { StyledSelect } from "./Select.styled"
import { useContext } from "react"
import { ModesContext } from "../../contexts"

export const Select: React.FC<ISelect> = ({ onChange }) => {
  const { modes } = useContext(ModesContext) ?? { modes: [] }

  const SelectOptions = modes.map((mode: TMode) =>
    <option value={+mode.field} key={mode.name}> {mode.name} </option>
  )

  return (
    <StyledSelect onChange={onChange}>
      {SelectOptions}
    </StyledSelect>
  )
}
