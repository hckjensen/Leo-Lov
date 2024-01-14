// import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ items }) => {
    return (
        <>
            <ul className={styles.navbar}>
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