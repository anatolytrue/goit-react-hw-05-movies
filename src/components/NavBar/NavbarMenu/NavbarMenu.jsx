import items from "./items";
import css from "./NavbarMenu.module.scss";
import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`
}

export default function NavbarMenu() {

    const elements = items.map(({ id, to, text }) => {
        if (to.includes('/products')) {
            return (
            <li key={id}>
                <NavLink className={getClassName} to={to}>{ text}</NavLink>
            </li>
        )
        }
        return (
            <li key={id}>
                <NavLink className={getClassName} to={to} end>{ text}</NavLink>
            </li>
        )
    })

    return (
        <ul className={css.menu}>
            {elements}
    </ul>
    )
}
