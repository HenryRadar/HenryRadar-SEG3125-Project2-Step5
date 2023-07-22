import Form from "react-bootstrap/Form";
import { useState } from "react";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);

  const id = props.id;
  const label = props.label;
  const addToCategories = props.addToCategories;
  const removeFromCategories = props.removeFromCategories;

  const handleClick = (id) => {
    if (checked) {
      removeFromCategories(id);
    } else {
      addToCategories(id);
    }
    setChecked(!checked);
  };

  return (
    <Form>
      <Form.Check
        type="checkbox"
        id={id}
        label={label}
        onChange={() => handleClick(id)}
      />
    </Form>
  );
};

export default Checkbox;
