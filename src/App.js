import MainComponent from "./components/MainComponent/MainComponent";
import styles from "./App.module.css";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const userExperience = {
    fontFamily: "'Inter', sans-serif",
    heading: "Sweet Sweet Sweet Sweet Sweet Sweet",
    feature1: {
      title: "Sugar Candy Sugar Candy Sugar Candy",
      text: "Sweet Confection and made of sugar Sweet Confection and made of sugar",
      bg: "rgba(237, 201, 153,.5)",
      color: "#000",
    },
    feature2: {
      title: "Chocolate Chocolate Chocolate  ",
      text: "Mood of ground roasted coca bins Mood of ground roasted coca ",
      bg: " rgba(243, 168, 81, 0.8)",
      color: "#000",
    },
  };
  return (
    <div className={styles.wrapper}>
      <MainComponent {...userExperience} />
    </div>
  );
}

export default App;
