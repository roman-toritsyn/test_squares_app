import { Cell } from "../Cell"

export const getCells = (cellQuantity: number) => {
  let FieldCells = []

  for(let i = 1; i <= cellQuantity; i++) {
    FieldCells.push(<Cell cellId={i.toString()} key={`cell_${i}`}/>)
  }

  return FieldCells
}
