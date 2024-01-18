import Button from "@mui/material/Button";

interface IButtonMUI {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const ButtonMUI: React.FC<IButtonMUI> = ({
  text,
  onClick,
  disabled,
  className,
}) => {
  return (
    <Button variant="outlined" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default ButtonMUI;
