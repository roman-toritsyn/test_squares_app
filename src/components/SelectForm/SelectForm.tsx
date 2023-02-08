import { FormWrapper } from "./SelectForm.styled"
import { Select } from "../Select"
import { Button } from "../Button"
import { useCallback, useContext, useRef, useState } from "react"
import { ModesContext } from "../../contexts"

export const SelectForm: React.FC = () => {
  const [selected, setSelected] = useState(5)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const { modes, cellQuantity, setCellQuantity, setHighLightedCells }
    = useContext(ModesContext)
    ?? {modes: [], cellQuantity: 0, setCellQuantity: () => {}, setHighLightedCells: () => {}}

  const showButton = cellQuantity !== selected

  const handleSelectChange = useCallback((e: any) => {
    setSelected(e.target.value)
  }, [])

  const handleButtonClick = useCallback(() => {
    setCellQuantity(selected)
    setHighLightedCells([])
  }, [ setCellQuantity, selected, setHighLightedCells ])

  return (
    <FormWrapper>
      <Select modes={modes} onChange={handleSelectChange} />
      {showButton && <Button clickHandler={handleButtonClick} buttonName="START" ref={buttonRef}/>}
    </FormWrapper>
  )
}
