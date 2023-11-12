import Link from "next/link";
import styles from './HomeNavbar.module.css'



export default function HomeNavbar() {
    return (
        <nav className='navbar navbar-end w-full space-x-3'>
            <li className='btn btn-secondary '>
                <Link href={'/auth/register'}>Register</Link>
            </li>
            <li className='btn btn-primary'>
                <Link href={'/auth/login'}>Login</Link>
            </li>
            <li className='btn btn-primary'>
                <Link href={'/api/auth/signin'}>Google login</Link>
            </li>
        </nav>
            
        
    )
}