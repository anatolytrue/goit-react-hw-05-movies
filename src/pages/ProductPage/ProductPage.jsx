import { NavLink, Outlet } from "react-router-dom";
import css from './ProductPage.module.css'

const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}
export default function ProductPage() {
    return (
        <div>
            <h1>Product Page</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul className={css.menu}>
                <li><NavLink to={'list'} className={getClassName}>List</NavLink></li>
                <li><NavLink to={'add'} className={getClassName}>Add</NavLink></li>
                <li><NavLink to={'search'} className={getClassName}>Search</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    )
}
