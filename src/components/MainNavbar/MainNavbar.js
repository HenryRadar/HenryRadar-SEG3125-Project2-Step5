import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MainNavbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../assets/i18n/i18n";

const MainNavbar = (props) => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(props.lang);

  const updateLanguage = props.updateLanguage;

  const changeLanguage = () => {
    if (currentLanguage === "en") {
      i18n
        .changeLanguage("fr")
        .then(() => setCurrentLanguage("fr"))
        .catch((err) => console.log(err));
      updateLanguage({
        lang: "fr",
      });
    } else {
      i18n
        .changeLanguage("en")
        .then(() => setCurrentLanguage("en"))
        .catch((err) => console.log(err));
      updateLanguage({
        lang: "en",
      });
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Nav className="d-flex justify-content-start">
            <Navbar.Brand href="/HenryRadar-SEG3125-Project2-Step5/#">
              <img
                src={logo}
                width="80"
                height="50"
                className="d-inline-block align-center"
                alt="PC Logo"
              />
              <div className="px-2 d-inline-block">CustomPC</div>
            </Navbar.Brand>
          </Nav>

          <Nav className="d-flex justify-content-end">
            <Nav.Link
              href="/HenryRadar-SEG3125-Project2-Step5/#/guides"
              className="align-center"
            >
              <u>{t("guides")}</u>
            </Nav.Link>
            <Nav.Link href="">
              <u>{t("sign in")}</u>
            </Nav.Link>
            <Nav.Link onClick={changeLanguage} className="align-center">
              <u>{t("language")}</u>
            </Nav.Link>
            <Navbar.Brand href="">
              <img
                src={cart}
                width="50"
                height="50"
                className="d-inline-block align-center"
                alt="PC Logo"
              />
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="navbar-lower">
        <Container>
          <NavDropdown title={t("shop")} id="shop-dropdown">
            <div className="header">{t("computer parts")}</div>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/cpu">
              CPU
            </NavDropdown.Item>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/motherboard">
              {t("motherboard")}
            </NavDropdown.Item>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/powersupply">
              {t("power supply")}
            </NavDropdown.Item>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/memory">
              {t("memory")}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <div className="header">{t("pc cooling")}</div>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/fans">
              {t("fans")}
            </NavDropdown.Item>
            <NavDropdown.Item href="/HenryRadar-SEG3125-Project2-Step5/#/shop/cooling">
              {t("liquid cooling")}
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
