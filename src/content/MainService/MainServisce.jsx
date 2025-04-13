/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./MainService.module.scss";
import { useSelector } from "react-redux";
import MainServiceLi from "./MainServiceLi";

export default function MainService() {
  const { service } = useSelector((state) => state.service);
  const [showBody, setShowBody] = React.useState(false)

  const servisItem = service.map((s, i) => {
    const {text, logo, body, isNew} = s
    return (
      <li key={i} >
        <MainServiceLi text={text} logo={logo} body={body} isNew={isNew} />
      </li>
    );
  });

  return (
    <div>
      <h2 className={styles.h2}>
        <span className={styles.span}>Наши услуги</span>
      </h2>
      <p className={styles.p}>
        Мы предлагаем нашим клиентам услуги по печати на текстиле, пошиву на
        заказ и тиснению на коже и кожезаменителе. Новинка в нашей линейке услуг
        - печать этикеток (бирок) для одежды с Вашим логотипом или другой
        информацией на заказ - размерников и составников из сатина и нейлона
        любыми тиражами.
      </p>
      <div className={styles.services}>
        <ul className={styles.ul}>{servisItem}</ul>
      </div>
    </div>
  );
}
