import "./CustomButton.css";
import Button from "react-bootstrap/Button";

const CustomButton = (props) => {
  return (
    <Button
      variant="primary"
      className="primary-button"
      href={props.href}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
