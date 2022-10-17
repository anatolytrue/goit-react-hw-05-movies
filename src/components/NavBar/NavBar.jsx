import css from './NavBar.module.css';
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu/NavbarMenu';


export default function NavBar() {
    return (
        <nav className={css.navbar}>
            <div className='container'>
                <div className={css.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <span>Cart:</span>
                </div>
            </div>
        </nav>
    )
}
