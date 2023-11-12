import Link from "next/link";
import styles from './HomeNavbar.module.css'



export default function HomeNavbar() {
    return (
        <nav className='navbar navbar-end w-full'>
            <li className='btn btn-secondary mx-5'>
                <Link href={'/auth/register'}>Register</Link>
            </li>
            <li className='btn btn-primary'>
                <Link href={'/auth/login'}>Login</Link>
            </li>
        </nav>
            
        
    )
}