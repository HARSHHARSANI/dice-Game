import React, { useState, useEffect } from "react";
import styles from "../components/Gameplay.module.css";
import dice1 from "../../public/images/dice/1.png";
import dice2 from "../../public/images/dice/2.png";
import dice3 from "../../public/images/dice/3.png";
import dice4 from "../../public/images/dice/4.png";
import dice5 from "../../public/images/dice/5.png";
import dice6 from "../../public/images/dice/6.png";

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [generatedNumber, setGeneratedNumber] = useState(1); // Initialize with dice1

  const handleRoll = () => {
    if (selectedNumber == null) {
      alert("can't start the game without selecting the number");
      return;
    }
    const generatedNumber = Math.floor(Math.random() * 6) + 1; // Generate number from 1 to 6
    console.log(generatedNumber);
    setGeneratedNumber(generatedNumber); // Set generated number

    if (generatedNumber === parseInt(selectedNumber)) {
      setTotalScore((prevScore) => prevScore + parseInt(selectedNumber));
    } else {
      setTotalScore((prevScore) => prevScore - 1);
    }
  };

  const handleReset = () => {
    setSelectedNumber(null);
    setTotalScore(0);
  };

  const handlerules = () => {
    alert(
      "Select a number , if we have the same number u will get the same score , otherwise i will deduct your score with -1"
    );
  };

  return (
    <>
      {JSON.stringify(selectedNumber)}
      <div className="container">
        <div className={styles.header}>
          <div className={styles.totalscoreSection}>
            <h1>{totalScore}</h1>
            <p className={styles.totalScore}>Total Score </p>
          </div>
          <div className={styles.selectNumberSection}>
            <div className={styles.numbers}>
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <div className="dice" key={number}>
                  <button
                    className={styles.dicebtn}
                    value={number}
                    onClick={(event) => setSelectedNumber(event.target.value)}
                  >
                    {number}
                  </button>
                </div>
              ))}
            </div>
            <p className={styles.selectNumber}>Select Number</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.play}>
          <div className={styles.dice1imageSection}>
            <img
              src={`../../public/images/dice/${generatedNumber}.png`}
              alt=""
              className={styles.dice1image}
              onClick={handleRoll}
            />
          </div>
          <p className={styles.content}>Click on Dice To Roll</p>
          <div className={styles.btnss}>
            <button className={styles.btn} onClick={handleReset}>
              Reset Score
            </button>
            <br />
            <button className={styles.btn} onClick={handlerules}>
              Show rules
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameplay;
