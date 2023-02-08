import React, { createContext, useEffect, useState } from 'react'
import { IModesContext, IModesProviderProps } from "./Modes.types"
import { URL } from "../constants"
import axios from "axios"

const ModesContext = createContext<IModesContext | null>(null)
const { Provider } = ModesContext

const ModesProvider: React.FC<IModesProviderProps> = ({
  children,
}) => {
  const [modes, setModes] = useState([])
  const [cellQuantity, setCellQuantity] = useState(0)
  const [highlightedCells, setHighLightedCells] = useState([])


  useEffect(() => {
    const getModes = async () => {
      const result = await axios(URL.MODE_URL);

      setModes(result.data);
    };

      getModes();
  }, []);

  return (
    <Provider
      value={{
        modes,
        cellQuantity,
        setCellQuantity,
        highlightedCells,
        setHighLightedCells,
      }}
    >
      {children}
    </Provider>
  )
}

export { ModesContext, ModesProvider }
