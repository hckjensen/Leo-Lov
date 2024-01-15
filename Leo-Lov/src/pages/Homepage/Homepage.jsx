import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';

const Homepage = () => {
    useEffect(() => { document.title = 'Leo-Lov' }, []);

    return (
        <>
            <Header heading='Leo-Lov' isHomePage={true} />
            <Main />
            <Footer />
        </>
    )
};

export default Homepage;