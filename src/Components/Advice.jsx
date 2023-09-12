import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Advice.module.css";
import desktopDriver from "../assests/pattern-divider-desktop.svg";
import dice from "../assests/icon-dice.svg";

const Advice = () => {
  const [data, setData] = useState({ id: "", advice: "" });
  const [buttonClick, setButtonClick] = useState(0);
  const fetchData = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setData({
        id: res.data.slip.id,
        advice: res.data.slip.advice,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [buttonClick]);
  const getAdvice = () => {
    setButtonClick(buttonClick + 1);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.id}>
              <p>ADVICE #{data.id}</p>
            </div>
            <div className={styles.advice}>
              <h1>{data.advice}</h1>
            </div>
            <div className={styles.image}>
              <img src={dice} alt="Divider" onClick={getAdvice} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
