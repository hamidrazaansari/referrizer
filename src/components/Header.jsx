import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiAlignRight } from "react-icons/fi";


const Header = () => {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.mainMenu}>
        <div className={styles.mainMenuInner}>
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} loading="lazy" alt="" src="/logo.svg"/>
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon1} alt="" src="/logo-text.svg" />
            </div>
          </div>
        </div>

        <nav className={styles.solutionsPricingTestimonialsWrapper}>
          <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className={styles.mainMenuInner}>
                  <div className={styles.groupParent}>
                    <img className={styles.groupIcon} loading="lazy" alt="" src="/logo.svg"/>
                    <div className={styles.groupWrapper}>
                      <img className={styles.groupIcon1} alt="" src="/logo-text.svg" />
                    </div>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav className={styles.solutionsPricingTestimonials}>
                <a className={styles.solutions}>Solutions</a>
                <a className={styles.pricing}>Pricing</a>
                <a className={styles.testimonials}>Testimonials</a>
              </nav>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
        <div className={styles.actionButtons}>
          <button className={styles.logInWrapper}>Login</button>
          <button className={styles.getStartedForFreeWrapper}>Get Started for Free</button>
          <button className={`d-lg-none d-block ${styles.burgerbutton}`} onClick={handleShow}><FiAlignRight /></button>
        </div>
      </div>
    </header>

    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
