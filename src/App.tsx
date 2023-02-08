import React, { useContext } from 'react'
import { ModesContext } from "./contexts"
import { SelectForm } from "./components/SelectForm"
import { Field } from "./components/Field"
import { GameWrapper, ContentWrapper } from "./App.styled"
import { HighLightedCellsList } from "./components/HighLightedCellsList"

function App() {
  const { modes, cellQuantity } = useContext(ModesContext) ?? { modes: [], cellQuantity: 0 }
  const showSelectFrom = modes.length > 0
  const showGameField = cellQuantity > 0

  return (
    <ContentWrapper>
      <GameWrapper>
        {showSelectFrom && <SelectForm />}
          {showGameField && <Field />}
      </GameWrapper>
      <HighLightedCellsList />
    </ContentWrapper>
  );
}

export default App;
