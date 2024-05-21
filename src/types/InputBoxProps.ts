export interface InputBoxProps {
  name: string;
  id: number;
  onCheckboxChange: (isChecked: boolean, id: number) => void;
}
