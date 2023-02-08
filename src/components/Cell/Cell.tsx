import { ICell } from "./Cell.types"
import { StyledCell } from "./Cell.styled"
import { useContext, useEffect, useState } from "react"
import { ModesContext } from "../../contexts"

export const Cell: React.FC<ICell> = ({ cellId }) => {
  // @ts-ignore
  const { cellQuantity, highlightedCells, setHighLightedCells } = useContext(ModesContext)
  const [isHighLighted, setIsHighLighted] = useState(false)

  const handleMouseEnter = () => {
    if (!isHighLighted) {
      if (!highlightedCells.find((id: number) => id === +cellId)) {
        setHighLightedCells([...highlightedCells, +cellId])
      }
    }

    if (isHighLighted) {
      const filteredCellsIds = highlightedCells.filter((id: number) => id !== +cellId)
      setHighLightedCells(filteredCellsIds)
    }

    setIsHighLighted(!isHighLighted)
  }

  useEffect(() => {
    setIsHighLighted(false)
  },[cellQuantity])

  return (
    <StyledCell
      isHighLighted={isHighLighted}
      id={cellId}
      onMouseEnter={handleMouseEnter}
    />
  )
}
