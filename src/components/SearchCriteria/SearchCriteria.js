import "./SearchCriteria.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";

const SearchCriteria = (props) => {
  const categories = props.content.categoires;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const updateSearchCriteria = props.updateSearchCriteria;

  const addToCategories = (id) => {
    //Add id to the list of selected categories
    const newSelectedCategories = [...selectedCategories];
    newSelectedCategories.push(id);
    setSelectedCategories(newSelectedCategories);
    updateSearchCriteria({
      title: props.content.title,
      categories: props.content.categories,
      selectedCategories: newSelectedCategories,
    });
  };

  const removeFromCategories = (id) => {
    //Remove id from the list of selected categories
    const updatedSelectedCategories = selectedCategories.filter(
      (category) => category !== id
    );
    setSelectedCategories(updatedSelectedCategories);
    updateSearchCriteria({
      title: props.content.title,
      categories: props.content.categories,
      selectedCategories: updatedSelectedCategories,
    });
  };

  return (
    <Accordion defaultActiveKey="0" className="criteria-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>{props.content.title}</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <div key={`default-checkbox`} className="mb-3">
              {props.content.categories.map((category) => (
                <Checkbox
                  id={category}
                  label={category}
                  addToCategories={addToCategories}
                  removeFromCategories={removeFromCategories}
                />
              ))}
            </div>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SearchCriteria;
