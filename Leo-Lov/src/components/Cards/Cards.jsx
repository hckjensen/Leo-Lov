import styles from './Cards.module.scss';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

const Card = ({ card }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef();

    const handleClick = () => {
        if (!isOpen) {
            const rect = cardRef.current.getBoundingClientRect();
            cardRef.current.style.top = `${rect.top}px`;
            cardRef.current.style.left = `${rect.left}px`;
        }

        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                ref={cardRef}
                className={`${styles.card} ${isOpen ? styles.animate : ''}`}
                onClick={handleClick}
            >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
            </div>

            {isOpen && (
                <div className={styles.modal} onClick={handleClick} />
            )}
        </>
    );
};

Card.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;