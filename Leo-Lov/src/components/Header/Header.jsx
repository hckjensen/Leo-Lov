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



const Header = ({ heading }) => {

    const [firstPart, secondPart] = heading.split('-')

    const subHeadingText = "Lov og ret kan været et plaster! Hvis du ellers har knaster!";

    return (
        <>
            <div className={styles.header}>
                <Nav items={[
                    { name: 'Hjem' },
                    { name: 'Advokaterne' },
                    { name: 'Om LeoLov' },
                    { name: 'Kontakt' },
                ]} />
                <div className={styles.container}>
                    <h1>
                        <span className={styles.firstPart}>{firstPart}</span>
                        <span className={styles.secondPart}>-{secondPart}</span>
                    </h1>
                    <p>{subHeadingText}</p>
                </div>
            </div>


        </>
    )
}



Header.propTypes = {
    heading: PropTypes.string.isRequired

};

export default Header;
