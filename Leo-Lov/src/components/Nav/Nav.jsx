// import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import PropTypes from 'prop-types';

const Nav = ({ items }) => {
    return (
        <>
            <ul className={styles.navbar}>
                {items.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}</p>
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
            // path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Nav