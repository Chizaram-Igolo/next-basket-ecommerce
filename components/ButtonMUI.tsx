import Button from "@mui/material/Button";

interface IButtonMUI {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const ButtonMUI: React.FC<IButtonMUI> = ({ text, onClick, disabled }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      size="large"
      className="w-80 h-12"
    >
      {text}
    </Button>
  );
};

export default ButtonMUI;
