import PropTypes from "prop-types";
import styles from "./Join.module.css";

const Join = ({ className = "" }) => {
  return (
    <section className={[styles.join, className].join(" ")}>
      <div className={styles.joinContainer}>
        <h1 className={styles.readyToJoin}>Ready to Join referrizer?</h1>
        <div className={styles.ourClientsSee}>
          Our clients see an average 20% growth in their business within the
          first month of using Referrizer. Why get left behind?
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <button className={styles.labels}>
            <div className={styles.signupForFree}>signup for FREE</div>
          </button>
          <button className={styles.labels1}>
            <div className={styles.bookADemo}>book a demo</div>
          </button>
        </div>
      </div>
    </section>
  );
};

Join.propTypes = {
  className: PropTypes.string,
};

export default Join;
