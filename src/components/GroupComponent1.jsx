import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  group,
  peopleFirst,
  createHighConvertingLandi,
  propFlex,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.groupWrapper}>
        <img className={styles.groupIcon} alt="" src={group} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.peopleFirstWrapper}>
          <h1 className={styles.peopleFirst}>{peopleFirst}</h1>
        </div>
        <div className={styles.createHighConvertingLanding}>
          {createHighConvertingLandi}
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  peopleFirst: PropTypes.string,
  createHighConvertingLandi: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default GroupComponent1;
