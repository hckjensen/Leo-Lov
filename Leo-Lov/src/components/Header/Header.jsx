import Nav from '../Nav/Nav';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';



const SubHeader = ({ subHeading, subHeadingText }) => {



    return (
        <>
            <div className={styles.subHeader}>
                <h3>{subHeading}</h3>
                <p>{subHeadingText}</p>
            </div>
        </>
    )
}

SubHeader.propTypes = {
    subHeading: PropTypes.string.isRequired,
    subHeadingText: PropTypes.string.isRequired

};



const Header = ({ heading, isHomePage }) => {

    const headerStyle = {
        height: isHomePage ? '90svh' : '70vh',

    };

    const navItems = [
        { path: "/", name: 'Hjem' },
        { path: "/advokaterne", name: 'Advokaterne' },
        { path: "/om-os", name: 'Om LeoLov' },
        { path: "/kontakt", name: 'Kontakt' },
    ]

    const [firstPart, secondPart] = heading.split('-')

    const subHeadingText = "Lov og ret kan været et plaster! Hvis du ellers har knaster!";

    return (
        <>
            <header className={styles.header} style={headerStyle}>
                <Nav items={navItems} />
                <div className={styles.container}>
                    <h1>
                        <span className={styles.firstPart}>{firstPart}</span>
                        <span className={styles.secondPart}>-{secondPart}</span>
                    </h1>
                    <p>{subHeadingText}</p>
                </div>
            </header>


        </>
    )
}



Header.propTypes = {
    heading: PropTypes.string.isRequired,
    isHomePage: PropTypes.bool.isRequired,

};

Header.defaultProps = {
    isHomePage: false,
};

export default Header;
