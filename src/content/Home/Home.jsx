import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUrl } from "../../reduce/urls";
import data from "../../logos.json";
import styles from "./Home.module.scss";
import Header from "../Headers/Header";
import Phones from "../Phones/Phones";
import AboutProd from "../AboutProd/AboutProd";
import { CloseOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Menu from "../Menu/Menu";
import { useDebouncedCallback } from "use-debounce";
import MainService from "../MainService/MainServisce";
import OurProd from "../OurProd/OurProd";

export default function Home() {
  const dispatch = useDispatch();
  const { homeUrl, newUrl, logo } = useSelector((state) => state.urlSlicer);
  const [a, setA] = React.useState({});
  const [widthMon, setWidth] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  const debounce = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
  }, 500);

  React.useEffect(() => {
    dispatch(setNewUrl(data));
    setWidth(window.innerWidth);
    window.addEventListener("resize", debounce);
  }, []);

  console.log(widthMon);
  // React.useEffect(() => {
  //   const b= newUrl.map(n => setA(n))
  //   console.log(a.sunLogo)
  //  },[newUrl])

  console.log(window.innerWidth);

  return (
    <div className={styles.home}>
      <img src={logo} className={styles.back} alt="" />
      <div className={styles.info}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="" />
          <Phones />
        </div>
      </div>
      <div className={styles.menu}>
        {widthMon < 400 ? (
          showMenu ? (
            <CloseOutlined
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={styles.spanMenu}
            />
          ) : (
            <MenuUnfoldOutlined
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
    </div>
  );
}
