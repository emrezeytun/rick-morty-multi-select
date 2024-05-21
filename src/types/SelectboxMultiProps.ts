import { Character } from "./Character";

export interface SelectboxMultiProps {
  isSelectboxOpen: boolean
  setIsSelectboxOpen: (open: boolean) => void
  onChangeSearch: (searchText: string) => void
  selectedCharacters: Character[]
  onCheckboxChange: (isChecked: boolean, id: number) => void
}