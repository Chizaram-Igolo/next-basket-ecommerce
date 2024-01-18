import Button from "@mui/material/Button";

interface IButtonMUI {
  text: string;
  variant: "outlined" | "contained" | "text";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "large" | "medium" | "small";
}

const ButtonMUI: React.FC<IButtonMUI> = ({
  text,
  variant,
  onClick,
  disabled,
  className,
  size,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={`w-80 h-12 ${className}`}
    >
      {text}
    </Button>
  );
};

export default ButtonMUI;
