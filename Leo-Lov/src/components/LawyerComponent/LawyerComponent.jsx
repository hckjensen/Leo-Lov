import styles from './LawyerComponent.module.scss';
import PropTypes from 'prop-types';


const EmployeeCard = ({ lawyer }) => {
    return (
        <div className={styles.card}>
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p>{lawyer.title}</p>
            <p>{lawyer.contact}</p>
        </div>
    );
};

EmployeeCard.propTypes = {
    lawyer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};




const LawyerSection = ({ lawyers }) => {
    return (
        <>
            <section className={styles.lawyerSection}>
                <h1>Advokaterne</h1>
                <div className={styles.grid}>
                    {lawyers.map((lawyer, index) => (
                        <EmployeeCard key={index} lawyer={lawyer} />
                    ))}
                </div>
            </section>
        </>
    );
};

LawyerSection.propTypes = {
    lawyers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
};

export default LawyerSection;