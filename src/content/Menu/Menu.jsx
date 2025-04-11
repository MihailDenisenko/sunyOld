import React from "react";
import styles from './Menu.module.scss'
import { Link } from "react-router";


export default function Menu({ start }) {
  const menus = [
    "Главная",
    "Каталог текстиля",
    "Печать на текстиле",
    "Пошив на заказ",
    "Тиснение",
    "Информация",
    "Контакты",
  ];

  const menu = menus.map((m, i) => {
    return (
      <li
        key={i}
        className={start ? `${styles.li} ${styles.vis} ` : `${styles.li}`}
      >
        <Link
          className={
            i !== 0 ? `${styles.Link}` : `${styles.Link} ${styles.active}`
          }
          to={"#"}
        >
          {m}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.divMenu}>
      <ul className={styles.ul}>{menu}</ul>
    </div>
  );
}
