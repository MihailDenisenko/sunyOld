import React from "react";
import { useSelector } from "react-redux";
import styles from "./OurNews.module.scss";


export default function OurNews() {
  const { ourNews } = useSelector((state) => state.service);
  const { homeUrl } = useSelector((state) => state.urlSlicer);

   const params = {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   };



  const news = ourNews.map((n, i) => {
    const { logo, price, colors, title, isNew } = n;
    return isNew ? (
      <li key={i} className={styles.card}>
        <div className={styles.card__backImg}>
          {isNew ? (
            <img
              className={styles.card__isNew}
              src="https://avatars.mds.yandex.net/i?id=4cd65be8dc5bcc969a0190d2b9cc3cd1b6c4bd25bc196711-12714867-images-thumbs&n=13"
            />
          ) : (
            ""
          )}
          <img src={`${homeUrl}${logo}`} className={styles.card__logo} alt="" />
          <img
            src={`${homeUrl}${colors}`}
            className={styles.card__colors}
            alt=""
          />
        </div>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__price}>{`от ${price} ₽`}</p>
        <div className={styles.card__button}>Подробнее</div>
      </li>
    ) : (
      ""
    );
  });
  console.log(ourNews);

  return (
    <div className={styles.ourNews} style={{ textAlign: "center" }}>
      <span className={styles.ourNews__span}>Наши новинки</span>
      {/* <ul className={styles.ul}>{news}</ul> */}

      


      <div className={styles.bottom}></div>
    </div>
  );
}
