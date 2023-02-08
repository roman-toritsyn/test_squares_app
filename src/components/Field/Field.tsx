import { useContext, useMemo } from "react"
import { ModesContext } from "../../contexts"
import { getCells } from "./getCells"
import { StyledField } from "./Field.styled"

export const Field: React.FC = () => {
  const { cellQuantity } = useContext(ModesContext) ?? {cellQuantity: 0}

  const FieldCells = useMemo(() => {
    return getCells(cellQuantity)
  }, [cellQuantity])

  return (
    <StyledField>{FieldCells}</StyledField>
  )
}
