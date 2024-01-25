import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  heading,
  feature1,
  feature2,

  fontFamily,
}) => {
  const calculateTextWidth = (text) => {
    const textSize = text.length;
    const baseSize = 500; // Default size

    // Adjust size based on text length
    return Math.min(baseSize + textSize);
  };

  const getMinWidth = () => {
    const textElements = [
      heading,
      feature1.title,
      feature1.text,
      feature2.title,
      feature2.text,
    ];

    // You can add more text elements to the array as needed

    const widths = textElements.map((text) => calculateTextWidth(text));
    return Math.max(...widths);
  };

  const minWidth = getMinWidth();

  return (
    <section className={styles.mainWrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.wrapper}>
        <div
          className={[styles.leftCircle, styles.circle].join(" ")}
          style={{
            background: feature1.bg,
            color: feature1.color,
            minWidth: minWidth,
            height: minWidth,
          }}
        >
          <h3 className={styles.title}>{feature1.title}</h3>
          <p className={styles.leftText}>{feature1.text}</p>
        </div>
        <div
          className={[styles.rightCircle, styles.circle].join(" ")}
          style={{
            background: feature2.bg,
            minWidth: minWidth,
            height: minWidth,
          }}
        >
          <h3 className={[styles.title, styles.titleRight].join(" ")}>
            {feature2.title}
          </h3>
          <p className={styles.rightText}>{feature2.text}</p>
        </div>
        <p className={styles.heading}>{heading}</p>
      </div>
    </section>
  );
};

export default MainComponent;
