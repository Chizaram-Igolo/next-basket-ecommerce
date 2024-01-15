import Button from "@mui/material/Button";

interface IButtonMUI {
  text: string;
}

const ButtonMUI: React.FC<IButtonMUI> = ({ text }) => {
  return <Button variant="outlined">{text}</Button>;
};

export default ButtonMUI;
