export interface SingleItemProps {
  avatarImageUrl: string
  name: string
  variant: number
  id: number
  isChecked: boolean
  onCheckboxChange: (isChecked: boolean, id: number) => void
}