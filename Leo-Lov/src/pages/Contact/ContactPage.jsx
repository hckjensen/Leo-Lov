import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';

const ContactPage = () => {

    useEffect(() => { document.title = 'Kontakt | Leo-Lov' }, []);
    return (
        <>
            <Header heading='Leo-lov' />

            <Footer />
        </>
    )
};

export default ContactPage;