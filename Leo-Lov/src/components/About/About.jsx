import styles from './About.module.scss';
import PropTypes from 'prop-types';

const AboutSection = ({ about }) => {


    return (
        <>
            <section className={styles.about}>
                <article className={styles.aboutArticle}>
                    {about.content}
                </article>


            </section>
        </>
    )

};

AboutSection.propTypes = {
    about: PropTypes.shape({
        content: PropTypes.node.isRequired,
    }).isRequired,
};
export default AboutSection