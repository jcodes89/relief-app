import Link from "next/link";
import styles from './AdminNavbar.module.css'

export default function AdminNavbar() {
    return (
        <nav className='navbar navbar-end w-full px-5'>
            <li className={styles.navLink}>
                <Link className="btn btn-square mx-4" href={'/admin/dashboard'}>Home</Link>
            </li>
            <li className={styles.navLink}>
                <Link className="btn btn-square mx-4" href={'/admin/dashboard/profile'}>Profile</Link>
            </li>
            <li className={styles.navLink}>
                <Link className="btn btn-square mx-4 mr-10" href={'/admin/dashboard/volunteers'}>Volunteers</Link>
            </li>
        </nav>
            
        
    )
}