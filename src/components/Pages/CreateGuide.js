import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import CustomButton from "../ CustomButton/CustomButton";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { createRef, useState } from "react";
import "./Create.css";

const CreateGuide = () => {
  const getPath = () => {
    const paths = [
      { url: "/SEG3125-Project2-Step3/#/guides", name: "Guides" },
      { url: null, name: "Create Guide" },
    ];

    return paths;
  };

  const titleRef = createRef();
  const categoryRef = createRef();
  const contentRef = createRef();
  const [errorMessageTitle, setErrorMessageTitle] = useState("");
  const [errorMessageCategory, setErrorMessageCategory] = useState("");
  const [errorMessageContent, setErrorMessageContent] = useState("");
  const [guideSubmission, setGuideSubmission] = useState(false);

  const [title, setTitle] = useState("");

  const submitGuide = () => {
    let validation = true;

    if (titleRef.current.value === "") {
      validation = false;
      setErrorMessageTitle("Please enter a title");
    } else {
      setErrorMessageTitle("");
    }

    if (categoryRef.current.value === "0") {
      validation = false;
      setErrorMessageCategory("Please select a category");
    } else {
      setErrorMessageCategory("");
    }

    if (contentRef.current.value === "") {
      validation = false;
      setErrorMessageContent("A guide cannot be empty");
    } else {
      setErrorMessageContent("");
    }

    if (validation === true) {
      setGuideSubmission(true);
    }
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          {guideSubmission && (
            <div>
              <h2 className="flex-item">Create a Guide</h2>
              <div className="flex-item py-2">
                Your guide has been submitted for moderation. It will be posted
                once it is approved.
              </div>
              <CustomButton
                title="Back to Guides"
                href="/SEG3125-Project2-Step3/#/guides"
              />
            </div>
          )}

          {!guideSubmission && (
            <div className="flex-fill">
              <h2 className="flex-item">Create a Guide</h2>
              <div className="flex-item py-2">Title</div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Guide Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                  ref={titleRef}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
              <div className="errorMessage">{errorMessageTitle}</div>

              <div className="flex-item py-2">Category</div>
              <Form.Select id="rating" aria-label="Category" ref={categoryRef}>
                <option value="0"></option>
                <option value="1">Getting Started</option>
                <option value="2">Part Installation</option>
                <option value="3">Replacing Parts</option>
              </Form.Select>
              <div className="errorMessage">{errorMessageCategory}</div>

              <h5 className="flex-item py-4">Guide Content</h5>

              <InputGroup>
                <Form.Control
                  as="textarea"
                  aria-label="Content"
                  ref={contentRef}
                />
              </InputGroup>
              <div className="errorMessage">{errorMessageContent}</div>

              <div className="flex-item py-4">
                <CustomButton title="Upload Guide" onClick={submitGuide} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CreateGuide;
