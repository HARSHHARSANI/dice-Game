import React from "react";
import styles from "./Startgame.module.css";
import dices from "/images/dices.png";

const Startgame = ({ setIsGameStarted }) => {
  return (
    <div className="container">
      <div className={styles.image}>
        <img src={dices} alt="" />
      </div>
      <div className={styles.content}>
        <h1> Dice Game</h1>
        <div>
          {" "}
          <button
            className={styles.button}
            onClick={() => setIsGameStarted(true)}
          >
            {" "}
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startgame;
