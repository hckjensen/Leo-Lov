// import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
const Nav = ({ items }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className={styles.hamburger} onClick={handleMenuToggle}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>

            </div>
            <ul ref={menuRef} className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Nav