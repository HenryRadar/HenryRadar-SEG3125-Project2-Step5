import Container from "react-bootstrap/Container";
import "./Home.css";
import computerImage from "../../assets/computerImage.webp";
import CustomButton from "../ CustomButton/CustomButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Home = (props) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(props.lang);

  return (
    <div>
      <Container>
        <div className="textbox d-flex">
          <div className="p-4 flex-fill">
            <h2>{t("your pc your parts")}</h2>
            <CustomButton
              title={t("shop")}
              href="/SEG3125-Project2-Step3/#/shop/home"
            />
            <div className="margin"></div>
            <h2>{t("first pc")}</h2>
            <CustomButton
              title="Guides"
              href="/SEG3125-Project2-Step3/#/guides"
            />
          </div>

          <img
            src={computerImage}
            width="750"
            height="500"
            className="flex-item"
            alt="Image of Computer"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
