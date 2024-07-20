import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <img className={styles.groupIcon} alt="" src="/logo.svg" />
          <div className={styles.spacer}>
            <img className={styles.groupIcon1} alt="" src="/group-4.svg" />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.companyParent}>
            <b className={styles.company}>Company</b>
            <div className={styles.aboutUsWereContainer}>
              <p className={styles.aboutUs}>About Us</p>
              <p className={styles.wereHiring}>We’re Hiring</p>
              <p className={styles.investors}>Investors</p>
              <p className={styles.contact}>Contact</p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.solutionsParent}>
            <b className={styles.solutions}>solutions</b>
            <div className={styles.customerLeadGenerationContainer}>
              <p className={styles.customerLeadGeneration}>
                Customer Lead Generation
              </p>
              <p className={styles.customerRetentionBoost}>
                Customer Retention Boost
              </p>
              <p className={styles.reputationManageent}>Reputation Manageent</p>
              <p className={styles.marketingAutomation}>Marketing Automation</p>
              <p className={styles.partnerupNetwork}>PartnerUp Network</p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.resourcesParent}>
            <b className={styles.resources}>Resources</b>
            <div className={styles.blogVideosCaseContainer}>
              <p className={styles.blog}>Blog</p>
              <p className={styles.videos}>Videos</p>
              <p className={styles.caseStudies}>Case Studies</p>
              <p className={styles.marketplace}>Marketplace</p>
              <p className={styles.industries}>Industries</p>
              <p className={styles.blankLine2}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.helpParent}>
            <b className={styles.help}>help</b>
            <div className={styles.supportKnowledgeBaseContainer}>
              <p className={styles.support}>Support</p>
              <p className={styles.knowledgeBase}>Knowledge Base</p>
              <p className={styles.liveChat}>Live Chat</p>
              <p className={styles.blankLine3}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.partnersParent}>
            <b className={styles.partners}>Partners</b>
            <div className={styles.developmentPartnersAffiliateContainer}>
              <p className={styles.developmentPartners}>Development Partners</p>
              <p className={styles.affiliateProgram}>Affiliate Program</p>
              <p className={styles.partnerOffers}>Partner Offers</p>
              <p className={styles.blankLine4}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.container}>
          <div className={styles.shape}>
            <img
              className={styles.shapeChild}
              loading="lazy"
              alt=""
              src="/group-142.svg"
            />
            <img
              className={styles.combinedShapePathIcon}
              loading="lazy"
              alt=""
              src="/combinedshapepath.svg"
            />
            <img
              className={styles.elementsIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.fill1Copy}
              loading="lazy"
              alt=""
              src="/fill-1-copy.svg"
            />
            <div className={styles.exclusion}>
              <img
                className={styles.excludeIcon}
                loading="lazy"
                alt=""
                src="/exclude.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.legal}>
          <div className={styles.referrizerInc}>
            © 2013-2021 Referrizer Inc.
          </div>
          <a className={styles.login}>Login</a>
          <div className={styles.signUpFor}>Sign up for free</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
