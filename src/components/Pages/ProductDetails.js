import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import productData from "../../data/productData";
import CustomButton from "../ CustomButton/CustomButton";
import Stars from "../Stars/Stars";
import Review from "../Review/Review";

const ProductDetails = (props) => {
  let params = useParams();

  let product = productData.filter((obj) => {
    return obj.id === parseInt(params.id);
  })[0];

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
      { url: null, name: "Product Details" },
    ];

    return paths;
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          <div className="p-4 flex-fill">
            <h2 className="flex-item">{product.name}</h2>
            <div className="flex-item py-2">
              <Stars rating={product.rating} />
            </div>

            <h4 className="flex-item">{product.price}</h4>

            <h3>Description</h3>
            <div className="flex-item">{product.description}</div>

            <div className="flex-item py-4">
              <CustomButton title="Add to Cart" href="" />
            </div>
          </div>

          <img
            src={product.image}
            width="400"
            height="500"
            className="flex-item align-right"
            alt="Product Image"
          />
        </div>
        <hr />
        <div className="d-flex">
          <div className="flex-fill px-4">
            <h2 className="flex-item">Reviews</h2>
            <div className="flex-item py-2">
              <CustomButton
                title="Leave a Review"
                href={"#/shop/details/review/" + product.id}
              />
            </div>

            <div className="flex-item py-3">
              {product.reviews.map((review) => (
                <div className="py-4">
                  <Review review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
