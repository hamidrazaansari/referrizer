import Header from '../components/Header'
import Hero from "../components/Hero";
import Misson from "../components/Misson";
import OurMisson from "../components/Value";
import Join from "../components/Join";
import styles from "./AboutUs.module.css";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>

      <Header />
      <Hero />
      <Misson />
      <section className={styles.numbersContentWrapper}>
        <div className={styles.numbersContent}>
          <div className={styles.numbersInnerContent}>
            <div className={styles.frameParent4}>
              <div className={styles.numbersTitleContentWrapper}>
                <div className={styles.numbersTitleContent}>
                  <div className={styles.numbers}>Numbers</div>
                  <h1 className={styles.referrizerInNumbers}>
                    Referrizer In Numbers
                  </h1>
                </div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis non tellus eget volutpat pulvinar accumsan, dictum eu. `}</div>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statsContainer}>
              <b className={styles.b}>2008</b>
              <div className={styles.statsLabels}>
                <h3 className={styles.yearFounded}>Year Founded</h3>
              </div>
            </div>
            <div className={styles.statsContainer1}>
              <b className={styles.b1}>150+</b>
              <div className={styles.clientsWrapper}>
                <h3 className={styles.clients}>Clients</h3>
              </div>
            </div>
            <div className={styles.countriesServedContentParent}>
              <div className={styles.countriesServedContent}>
                <b className={styles.countriesServedNumber}>90+</b>
              </div>
              <h3 className={styles.coutnriesServed}>Coutnries Served</h3>
            </div>
            <div className={styles.statsContainer2}>
              <b className={styles.b2}>100+</b>
              <div className={styles.fullTimeEmployeesWrapper}>
                <h3 className={styles.fullTimeEmployees}>
                  Full-time Employees
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurMisson />
      <Join />
      <Footer />
    </div>
  );
};

export default AboutUs;
