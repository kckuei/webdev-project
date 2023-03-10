import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCat } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import { MdOutlineArticle, MdPeople, MdOutlineShoppingCart, MdMailOutline } from 'react-icons/md'


function Navigation() {

    let location = useLocation();

    function setActive(route_path) {
        if (location.pathname.includes('/cats') && route_path.includes('/cats')) {
            return 'active'
        }
        return (location.pathname === route_path) ? 'active' : ''
    }

    return (
        <>
            <nav>
                <Link to="/" className={setActive("/")}>
                    <AiOutlineHome /> Home
                </Link>
                <Link to="/blog" className={setActive("/blog")}>
                    <MdOutlineArticle /> Blog
                </Link>
                <Link to="/gallery" className={setActive("/gallery")}>
                    <TfiGallery /> Gallery
                </Link>
                <Link to="/staff" className={setActive("/staff")}>
                    <MdPeople /> Staff
                </Link>
                <Link to="/cats" className={setActive("/cats")}>
                    <FaCat /> Cats
                </Link>
                <Link to="/order" className={setActive("/order")}>
                    <MdOutlineShoppingCart /> Order
                </Link>
                <Link to="/contact" className={setActive("/contact")}>
                    <MdMailOutline /> Contact
                </Link>
            </nav>
        </>
    );
}

export default Navigation;