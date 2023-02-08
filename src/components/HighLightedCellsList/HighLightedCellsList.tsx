import { useContext, useMemo } from "react"
import { ModesContext } from "../../contexts"
import { HighLightedCellInfoRow } from "./HighLightedCellInfoRow"
import { HighLightedCellsListContainer } from "./HighLightedCellsList.styled"

export const HighLightedCellsList: React.FC = () => {
  const { highlightedCells } = useContext(ModesContext) ?? { highlightedCells: [] }

  const cellsContent = useMemo(() => highlightedCells.sort((a: number, b: number) => a - b), [highlightedCells])

  const CellRows = useMemo(() => cellsContent.map((id: number) => <HighLightedCellInfoRow cellOrder={id} key={Math.random().toString()} />),
  [cellsContent])

  return (
   <HighLightedCellsListContainer role="list">
     {CellRows}
   </HighLightedCellsListContainer>
  )
}
