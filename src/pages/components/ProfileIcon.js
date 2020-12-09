import styles from './../../styles/Home.module.css';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

export default function ProfileIcon() {
  return (
    <div className={styles.profileImage}>
      <Badge pill variant="danger" className={styles.profileCount}>
        3
      </Badge>
      <Image src="/profile.png" width="40" roundedCircle className="mr-sm-4"></Image>
    </div>
  );
}
