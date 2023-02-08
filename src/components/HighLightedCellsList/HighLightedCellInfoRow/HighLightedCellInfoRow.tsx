import { HighLightedCellInfoRowContainer } from "./HighLightedCellInfoRow.styled"
import { IHighLightedCellInfoRow } from "./HighLightedCellInfoRow.types"

export const HighLightedCellInfoRow: React.FC<IHighLightedCellInfoRow> = ({ cellOrder, key }) => {
  const row = Math.ceil(cellOrder / 5)
  const col = 5 - ( 5 * row - cellOrder)
  const positionMessage = `row ${row} col ${col}`

  return (
    <HighLightedCellInfoRowContainer role="listitem" key={key}>
      <span>{positionMessage}</span>
    </HighLightedCellInfoRowContainer>
  )
}
