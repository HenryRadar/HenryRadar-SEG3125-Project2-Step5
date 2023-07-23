import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import productData from "../../data/productData";
import CustomButton from "../ CustomButton/CustomButton";
import Stars from "../Stars/Stars";
import "./Create.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { createRef, useState } from "react";

const CreateReview = (props) => {
  let params = useParams();

  let product = productData.filter((obj) => {
    return obj.id === parseInt(params.id);
  })[0];

  const starsRef = createRef();

  const getSectionName = (section) => {
    if (section == "cpu") {
      return "CPU";
    } else if (section == "motherboard") {
      return "Motherboard";
    } else if (section == "powersupply") {
      return "Power Supply";
    } else if (section == "memory") {
      return "Memory";
    } else if (section == "fans") {
      return "PC Fans";
    } else if (section == "cooling") {
      return "Liquid Cooling";
    } else {
      return "";
    }
  };

  const getPath = () => {
    let name = getSectionName(product.section);

    if (name == "") {
      return [
        { url: "/HenryRadar-SEG3125-Project2-Step5/#/shop/home", name: name },
      ];
    }

    let path = {
      url: "/HenryRadar-SEG3125-Project2-Step5/#/shop/" + product.section,
      name: name,
    };
    const paths = [
      { url: "/HenryRadar-SEG3125-Project2-Step5/#/shop/home", name: "Shop" },
      path,
      {
        url: "/HenryRadar-SEG3125-Project2-Step5/#/shop/details/" + product.id,
        name: "Product Details",
      },
      { url: null, name: "Review" },
    ];

    return paths;
  };

  const [reviewSubmission, setReviewSubmission] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(0);

  const submitReview = () => {
    if (starsRef.current.value === "0") {
      setErrorMessage("Please select a rating");
    } else {
      setErrorMessage("");
      setReviewSubmission(!reviewSubmission);
    }
  };

  const updateStars = () => {
    setRating(starsRef.current.value);
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          {reviewSubmission && (
            <div>
              <h2 className="flex-item">Leave a Review</h2>
              <div className="flex-item py-2">
                Your review had been submitted for: {product.name}
              </div>
              <CustomButton
                title="Back to Product"
                href={
                  "/HenryRadar-SEG3125-Project2-Step5/#/shop/details/" +
                  product.id
                }
              />
            </div>
          )}
          {!reviewSubmission && (
            <div className="flex-fill">
              <h2 className="flex-item">Leave a Review</h2>
              <div className="flex-item py-2">Product: {product.name}</div>
              <div className="flex-item py-2">
                Rating:
                <Stars rating={rating} />
                <Form.Select
                  id="rating"
                  aria-label="Star Rating"
                  onChange={updateStars}
                  ref={starsRef}
                >
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                <div className="errorMessage">{errorMessage}</div>
              </div>

              <h5 className="flex-item py-2">Comments</h5>

              <InputGroup>
                <Form.Control as="textarea" aria-label="Comments" />
              </InputGroup>

              <div className="flex-item py-4">
                <CustomButton title="Submit Review" onClick={submitReview} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CreateReview;
