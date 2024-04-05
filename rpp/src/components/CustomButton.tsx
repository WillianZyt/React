type Props = {
  label: string;
  onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
  const handleButtonClick = () => {
    // alguma coisa
    onClick();
    //depois de alguma coisa
  }

  return (
    <button onClick={onClick} className="p-3 rounded-md text-white bg-blue-600">{label}</button>
  )
}