import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const ButtonDefault = (props) => {
  var isLoading = props.loading === undefined ? false : props.loading;
  var variant = props.variant === undefined ? "contained" : props.variant;
  return (
    <Button
      variant={variant}
      type={props.type}
      href={props.href}
      disabled={isLoading}
      onClick={props.onClick}
      style={{ backgroundColor: props.bgColor }}
    >
      {isLoading === true ? <CircularProgress size={20} /> : props.title}
    </Button>
  );
};

export default ButtonDefault;
