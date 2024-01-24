import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  heading,
  feature1,
  feature2,

  fontFamily,
}) => {
  return (
    <section className={styles.mainWrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.wrapper}>
        <p className={styles.heading}>{heading}</p>
        <div
          className={[styles.leftCircle, styles.circle].join(" ")}
          style={{ background: feature1.bg, color: feature1.color }}
        >
          <h3 className={styles.title}>{feature1.title}</h3>
          <p className={styles.leftText}>{feature1.text}</p>
        </div>
        <div
          className={[styles.rightCircle, styles.circle].join(" ")}
          style={{ background: feature2.bg }}
        >
          <h3 className={styles.title}>{feature2.title}</h3>

          <p className={styles.rightText}>{feature2.text}</p>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
