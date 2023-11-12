import Link from "next/link";
import styles from './VolunteerNavbar.module.css'

export default function VolunteerNavbar() {
    return (
        <nav className={styles.nav}>
            <li className={styles.navLink}>
                <Link href={'/volunteer/dashboard'}>Home</Link>
            </li>
            <li className={styles.navLink}>
                <Link href={'/volunteer/dashboard/profile'}>Profile</Link>
            </li>
        </nav>
            
        
    )
}