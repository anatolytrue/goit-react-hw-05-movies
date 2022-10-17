import { NavLink } from "react-router-dom";
import css from './AppBar.module.css';

const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

export default function AppBar() {
    return (
        <header>

            <nav>
                <NavLink
                    to="home"
                    className={getClassName}>
                    Home
                </NavLink>
                <NavLink
                    to="movies"
                    className={getClassName}>
                    Movies
                </NavLink>
            </nav>
        </header>
    )
}
