import Container from "react-bootstrap/Container";
import "./Shop.css";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import StoreContent from "../StoreContent/StoreContent";

const Shop = (props) => {
  let params = useParams();

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
      return "Shop";
    }
  };

  const getCriteriaBySection = (section) => {
    if (section == "cpu") {
      return [
        {
          title: "Price",
          categories: ["$0-$99.99", "$100-$299.99", "$300+"],
          selectedCategories: [],
        },
        {
          title: "Brand",
          categories: ["Intel", "AMD"],
          selectedCategories: [],
        },
      ];
    } else if (section == "motherboard") {
      return [
        {
          title: "Price",
          categories: ["$0-$99.99", "$100-$299.99", "$300+"],
          selectedCategories: [],
        },
        {
          title: "Platform",
          categories: ["Intel", "AMD"],
          selectedCategories: [],
        },
        {
          title: "Brand",
          categories: ["ASUS", "MSI"],
          selectedCategories: [],
        },
      ];
    } else if (section == "powersupply") {
      return [
        {
          title: "Price",
          categories: ["$0-$49.99", "$50-$99.99", "$100+"],
          selectedCategories: [],
        },
        {
          title: "Brand",
          categories: ["Corsair", "Gigabyte"],
          selectedCategories: [],
        },
        {
          title: "Power",
          categories: ["550W", "750W", "850W"],
          selectedCategories: [],
        },
      ];
    } else if (section == "memory") {
      return [
        {
          title: "Price",
          categories: ["$0-$49.99", "$50-$99.99", "$100+"],
          selectedCategories: [],
        },
        {
          title: "Brand",
          categories: ["Corsair", "GSkill"],
          selectedCategories: [],
        },
        {
          title: "Capacity",
          categories: ["8GB", "16GB", "32GB"],
          selectedCategories: [],
        },
      ];
    } else if (section == "fans") {
      return [
        {
          title: "Price",
          categories: ["$0-$49.99", "$50-$99.99", "$100+"],
          selectedCategories: [],
        },
        {
          title: "Brand",
          categories: ["Corsair", "Fractal Design"],
          selectedCategories: [],
        },
      ];
    } else if (section == "cooling") {
      return [
        {
          title: "Price",
          categories: ["$0-$49.99", "$50-$99.99", "$100+"],
          selectedCategories: [],
        },
      ];
    } else {
      return [{}];
    }
  };

  const getPath = () => {
    let name = getSectionName(params.section);

    if (name == "Shop") {
      return [{ url: "/SEG3125-Project2-Step3/#/shop/home", name: name }];
    }

    let path = {
      url: "/SEG3125-Project2-Step3/#/shop/" + params.section,
      name: name,
    };
    const paths = [
      { url: "/SEG3125-Project2-Step3/#/shop/home", name: "Shop" },
      path,
    ];

    return paths;
  };

  const getStorePage = () => {
    if (getSectionName(params.section) == "Shop") {
      return (
        <Container>
          <h5>Computer Parts</h5>
          <ul>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/cpu">CPU</a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/motherboard">
                Motherboard
              </a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/powersupply">
                Power Supply
              </a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/memory">Memory</a>
            </li>
          </ul>
          <br />
          <h5>PC Cooling</h5>
          <ul>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/fans">Fans</a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/#/shop/cooling">
                Liquid Cooling
              </a>
            </li>
          </ul>
        </Container>
      );
    } else {
      return (
        <StoreContent
          criteria={getCriteriaBySection(params.section)}
          section={params.section}
        />
      );
    }
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <h1>{getSectionName(params.section)}</h1>
        <div>{getStorePage()}</div>
      </Container>
    </div>
  );
};

export default Shop;
