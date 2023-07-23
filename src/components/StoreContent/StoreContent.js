import Container from "react-bootstrap/Container";
import "./StoreContent.css";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import ProductCard from "../ProductCard/ProductCard";
import productData from "../../data/productData";
import { useEffect, useState } from "react";

const StoreContent = (props) => {
  const sectionData = productData.filter(
    (item) => item.section === props.section
  );

  useEffect(() => {
    setResultNumber(sectionData.length);
    setSelectedFilters(props.criteria);
    setFilteredData(sectionData);
  }, [props.section]);

  const [resultNumber, setResultNumber] = useState(sectionData.length);
  const [selectedFilters, setSelectedFilters] = useState(props.criteria);
  const [filteredData, setFilteredData] = useState(sectionData);

  const updateSearchCriteria = (newCriteria) => {
    const updatedFilters = [...selectedFilters];
    const i = updatedFilters.findIndex(
      (filter) => filter.title === newCriteria.title
    );
    updatedFilters[i] = newCriteria;
    setSelectedFilters(updatedFilters);
    updateProducts(updatedFilters);
  };

  const updateProducts = (updatedFilters) => {
    let updatedFilteredData = [...sectionData];
    updatedFilters.map((filter) =>
      filter.selectedCategories.map(
        (value) =>
          (updatedFilteredData = updatedFilteredData.filter(
            (item) => item.filters[filter.title] === value
          ))
      )
    );
    setFilteredData(updatedFilteredData);
    setResultNumber(updatedFilteredData.length);
  };

  const getUrl = (id) => {
    return "/SEG3125-Project2-Step3/#/shop/details/" + id;
  };

  return (
    <Container>
      <div className="d-flex">
        <div className="flex-item width-adjustment">
          <div className="criteria-border d-flex align-items-center flex-item "></div>

          <div className="flex-fill">
            {props.criteria.map((content) => (
              <SearchCriteria
                content={content}
                updateSearchCriteria={updateSearchCriteria}
              />
            ))}
          </div>
        </div>

        <div className="flex-fill">
          <h5>{resultNumber} Results</h5>
          <hr />
          <Container>
            <div className="d-flex flex-row align-items-left flex-wrap">
              {filteredData.map((product) => (
                <div className="mx-2 my-4">
                  <a href={getUrl(product.id)}>
                    <ProductCard product={product} />
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default StoreContent;
