import { Navbar, Nav, Button } from 'react-bootstrap';
import styles from './../../styles/Home.module.css';
import ProfileIcon from './ProfileIcon';

export default function NavBar(props) {
  const { isMobileOrTab } = props;

  return (
    <>
      <Navbar expand="lg" className={styles.navBar}>
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className={styles.mainHeading}>HEALTH EXPLORE</Navbar.Brand>
          {
            isMobileOrTab && <ProfileIcon />
          }
        </>
        <Navbar.Collapse id="basic-navbar-nav" className={isMobileOrTab && styles.centerMobile}>
          <Nav className="m-auto">
            <Nav.Link href="#profile" className={styles.navLink}>PROFILE</Nav.Link>
            <Nav.Link href="#jobs" className={styles.navLink}>JOBS</Nav.Link>
            <Nav.Link href="#professional-network" className={styles.navLink}>PROFESSIONAL NETWORK</Nav.Link>
            <Nav.Link href="#lounge" className={styles.navLink}>LOUNGE</Nav.Link>
            <Nav.Link href="#salary" className={styles.navLink}>SALARY</Nav.Link>
            {
              isMobileOrTab &&
              <>
                <Nav.Link href="#salary" className={styles.navLink}>CREATE JOB</Nav.Link>
                <Nav.Link href="#salary" className={styles.navLink}>LOGOUT</Nav.Link>
              </>
            }
          </Nav>
          {
            !isMobileOrTab &&
            <>
              <Button variant="outline-primary" className="mr-sm-4">CREATE JOB</Button>
               <ProfileIcon />
              <div>LOGOUT</div>
            </>
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
