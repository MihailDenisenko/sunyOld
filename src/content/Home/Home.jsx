import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUrl } from "../../reduce/urls";
import data from "../../logos.json";
import styles from "./Home.module.scss";
import Header from "../Headers/Header";
import Phones from "../Phones/Phones";
import AboutProd from "../AboutProd/AboutProd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Menu from "../Menu/Menu";
import { useDebouncedCallback } from "use-debounce";
import MainService from "../MainService/MainServisce";
import OurProd from "../OurProd/OurProd";
import { setWidth } from "../../reduce/width";
import OurNews from "../OurNews/OurNews";
import Helper from "../Helper/Helper";
import { setShowHelper } from "../../reduce/width";

export default function Home() {
  const dispatch = useDispatch();
  const { width, showHelper } = useSelector((state) => state.width);
  const { homeUrl, newUrl, logo } = useSelector((state) => state.urlSlicer);
  const [a, setA] = React.useState({});
  // const [widthMon, setWidth] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);
  // const [bbb, setBbber] = React.useState(true);

  const debounce = useDebouncedCallback(() => {
    dispatch(setWidth(window.innerWidth));
  }, 500);

  const scrolling = () => {
    console.log(window.scrollY)
    setTimeout(() => {dispatch(setShowHelper(true)) }, 5000)
    window.removeEventListener("scroll", scrolling)
  }

  React.useEffect(() => {
    dispatch(setNewUrl(data));
    setWidth(window.innerWidth);
    window.addEventListener("resize", debounce);
    window.addEventListener('scroll', scrolling)
  }, []);

  
  

  return (
    <div className={styles.home}>
        <img
          className={styles.helper}
          src="https://avatars.mds.yandex.net/i?id=148c2d6212ad56a16d4ab9d93654b5562f547323-4615436-images-thumbs&n=13"
          alt=""
          onClick={() => dispatch(setShowHelper(true))}
        />
      <img src={logo} className={styles.back} alt="" />
      <div className={styles.info}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="" />
          <Phones />
        </div>
      </div>
      <div className={styles.menu}>
        {width < 400 ? (
          showMenu ? (
            <CloseOutlined
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={styles.spanMenu}
            />
          ) : (
            <MenuOutlined
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={styles.spanMenu}
            />
          )
        ) : (
          ""
        )}

        <div className={!showMenu ? styles.divMenu : styles.divMenuShow}>
          <Menu start={showMenu} />
        </div>
      </div>
      <div className={styles.aboutProd}>
        <AboutProd />
      </div>
      <div className={styles.mainService}>
        <MainService />
      </div>
      <OurProd />
      <OurNews />
      {showHelper ? <Helper /> : ""}
    </div>
  );
}
