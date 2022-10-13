import { Outlet, Link } from "react-router-dom";

export default function SharedLayout() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="movies">Movies</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </header>
    );
}