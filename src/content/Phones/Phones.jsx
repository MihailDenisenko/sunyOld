import React from "react";
import styles from "./Phones.module.scss";

export default function Phones() {
  const telephones = ["+78127027341", "+79013142065", "+79013142065"];

  const tel = telephones.map((tel, i) => {
    const num = tel.split('')
    // console.log(num)
    let numberTel = num.reduce((acc,n, i) => {
      if (i === 2) acc += " ("
      if (i === 5) acc += ") ";
      if (i === 8) acc += " - ";
      if (i === 10) acc += " - ";
      
      return acc+=n
    }, '')
    return (
      <li key={i} className={styles.tel}>
        <a className={styles.a} href={`tel:${tel}`}>{numberTel }</a>
      {/* {numberTel} */}
    </li>);
  });

  return (
    <div className={styles.phonesDiv}>
      <ul className={styles.ul}>{tel}</ul>
    </div>
  );
}

// https://i2.wp.com/cdn.onlinewebfonts.com/svg/img_401526.png
