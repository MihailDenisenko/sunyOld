import React from "react";
import styles from "./OurProd.module.scss";
import { useSelector } from "react-redux";

export default function OurProd() {
  const { ourProd } = useSelector((state) => state.service);
  const ourProduct = ourProd.map((prod, i) => {
    const {title, logo} = prod
    return (
      <li key={i} className={styles.ourProd__ul_li}>
        <p className={styles.p}>{title}</p>
        <div className={styles.div}>
          <img src={logo} alt="" className={styles.img} />
        </div>
      </li>
    );
  })
  return (
    <div className={styles.ourProd}>
      <span className={styles.ourProd__span}>Наша продукция</span>
      <p className={styles.ourProd__p}>
        На нашем оптовом складе Вы можете посмотреть все изделия нашего
        производства и производства наших партнёров, представленные на страничке
        Текстильного каталога "в живую". Померить футболки с коротким и длинным
        рукавом (лонгсливы), майки, поло, толстовки, банданы, бейсболки,
        промошапки и прочие изделия, взять образец под залог, а также купить
        оптом и в розницу понравившуюся Вам продукцию по минимальной оптовой
        цене.
      </p>
      <ul className={styles.ourProd__ul}>
    {ourProduct}
      </ul>
    </div>
  );
}
