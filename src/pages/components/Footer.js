import styles from './../../styles/Home.module.css';
import { footerContent } from '../constants/constant';

export default function Footer(props) {
  const { isMobileOrTab } = props;

  return (
    <footer className={!isMobileOrTab ? styles.footer : styles.footerMobile}>
      {
        Object.keys(footerContent).map((key, index) => (
          <div key={index} className={!isMobileOrTab ? index === 0 ? styles.width40 : styles.width30 : styles.width80}>
            <h4>{key}</h4>
            {
              footerContent[key].map((val, cIndex) => (
                <p className={styles.footerContent} key={cIndex}>
                  {val}
                </p>
              ))
            }
          </div>
        ))
      }
    </footer>
  );
}
