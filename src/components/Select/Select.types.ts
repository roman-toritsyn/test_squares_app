import { TModesList } from "../../contexts/Modes.types"

export interface ISelect {
  modes: TModesList
  onChange:  React.ChangeEventHandler<HTMLSelectElement>
}
