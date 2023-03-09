import { Link, useLocation } from 'react-router-dom';

function Navigation() {

    let location = useLocation();

    function setActive(route_path) {
        return (location.pathname === route_path) ? 'active' : ''
    }

    return (
        <>
            <nav>
                <Link to="/" className={setActive("/")}>
                    Home
                </Link>
                <Link to="/blog" className={setActive("/blog")}>
                    Blog
                </Link>
                <Link to="/gallery" className={setActive("/gallery")}>
                    Gallery
                </Link>
                <Link to="/staff" className={setActive("/staff")}>
                    Staff
                </Link>
                <Link to="/cats" className={setActive("/cats")}>
                    Cats
                </Link>
                <Link to="/order" className={setActive("/order")}>
                    Order
                </Link>
                <Link to="/contact" className={setActive("/contact")}>
                    Contact
                </Link>
            </nav>
        </>
    );
}

export default Navigation;