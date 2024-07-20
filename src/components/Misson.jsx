import PropTypes from "prop-types";
import styles from "./Misson.module.css";

const Misson = () => {
  return (
    <section className={styles.missionContentWrapper}>
      <div className={styles.missionContent}>
        <div className={styles.missionInnerContent}>
          <div className={styles.missionParent}>
            <div className={styles.mission}>Mission</div>
            <div className={styles.missionDescription}>
              <h1 className={styles.ourMission}>Our Mission</h1>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas ipsum ut morbi feugiat ut egestas vulputate phasellus
                  malesuada. Mauris dignissim et tellus enim diam sed.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.pellentesqueIdTellus}>
                  Pellentesque id tellus, molestie non, imperdiet sed vitae
                  nullam odio. Morbi tellus, odio in duis quis lorem. Malesuada
                  nisl sapien gravida elementum ac, et placerat eu.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.missionInnerContentInner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt="our-misson img"
              src="/group-4695@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Misson.propTypes = {
  className: PropTypes.string,
};

export default Misson;
