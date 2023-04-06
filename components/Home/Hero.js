import styles from "../../src/styles/hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={styles.heroBg}>
        <h1 className="text-5xl text-white">Your world of joy</h1>
        <p className="text-xl text-slate-400">
          Find what makes you happy anytime, anywhere.Find what makes you happy
          anytime, anywhere
        </p>
      </div>
    </>
  );
};

export default Hero;
