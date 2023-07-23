import Container from "react-bootstrap/Container";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import guideData from "../../data/guideData";
import CustomButton from "../ CustomButton/CustomButton";
import "../StoreContent/StoreContent.css";
import { useState } from "react";

const Guides = (props) => {
  const criteria = [
    {
      title: "Topic",
      categories: [
        "Getting Started",
        "Part Installation",
        "Replacing Parts",
        "User Guides",
      ],
      selectedCategories: [],
    },
  ];

  const data = guideData;

  const [resultNumber, setResultNumber] = useState(data.length);
  const [selectedFilters, setSelectedFilters] = useState(criteria);
  const [filteredData, setFilteredData] = useState(data);

  const updateSearchCriteria = (newCriteria) => {
    const updatedFilters = newCriteria;
    setSelectedFilters(updatedFilters);
    updateProducts(updatedFilters);
  };

  const updateProducts = (updatedFilters) => {
    let updatedFilteredData = [...data];
    console.log(updatedFilters);

    if (updatedFilters.selectedCategories.length != 0) {
      updatedFilteredData = data.filter((guide) =>
        updatedFilters.selectedCategories.includes(guide.filters.Topic)
      );
    }

    setFilteredData(updatedFilteredData);
    setResultNumber(updatedFilteredData.length);
  };

  const getUrl = (id) => {
    return "/HenryRadar-SEG3125-Project2-Step5/#/guides/guide/" + id;
  };

  return (
    <Container>
      <h1 className="py-4">Guides</h1>
      <div className="d-flex">
        <div className="flex-item width-adjustment">
          <div className="criteria-border d-flex align-items-center flex-item "></div>

          <div className="flex-fill">
            <SearchCriteria
              content={criteria[0]}
              updateSearchCriteria={updateSearchCriteria}
            />
          </div>
          <div className="py-2 px-2 justify-content-center">
            <CustomButton
              title="Create a Guide"
              href="/HenryRadar-SEG3125-Project2-Step5/#/guides/create"
            />
          </div>
        </div>

        <div className="flex-fill">
          <h5>{resultNumber} Results</h5>
          <hr />
          <Container>
            <div className="d-flex">
              <div className="flex-fill">
                {filteredData.map((guide) => (
                  <div className="flex-item py-1">
                    <a href={getUrl(guide.id)}>{guide.title}</a>
                    <div className="flex-item">{guide.description}</div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Guides;
