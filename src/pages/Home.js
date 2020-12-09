import { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import LeftContent from './components/LeftContent';
import Footer from './components/Footer';
import JobList from './components/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isMobileOrTab, setIsMobileOrTab] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setIsMobileOrTab(window.innerWidth <= 991);
  }

  useEffect(() => {
    setIsMobileOrTab(window.innerWidth <= 991);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div className={styles.container}>
      <NavBar isMobileOrTab={isMobileOrTab}/>
      <SearchInput />
      <main className={styles.main}>
        {
          !isMobileOrTab && <LeftContent />
        }
        <JobList isMobileOrTab={isMobileOrTab}/>
      </main>
      <Footer isMobileOrTab={isMobileOrTab}/>
    </div>
  )
}
