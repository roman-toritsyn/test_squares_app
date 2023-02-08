import { ReactNode } from 'react'

export enum MODE_NAMES {
  EASY = 'Easy',
  NORMAL = 'Normal',
  HARD = 'Hard',
}

export enum MODE_FIELDS {
  FIVE = 5,
  FIFTEEN = 15,
  TWENTYFIVE = 25,
}

export type TMode = {
  name: MODE_NAMES,
  field: MODE_FIELDS,
}

export type TModesList = TMode[]


export interface IModesContext {
  modes: TModesList,
  cellQuantity: MODE_FIELDS,
  setCellQuantity: React.Dispatch<React.SetStateAction<MODE_FIELDS>>,
  highlightedCells: number[],
  setHighLightedCells: React.Dispatch<React.SetStateAction<never[]>>,
}

export interface IModesProviderProps {
  children: ReactNode
}
