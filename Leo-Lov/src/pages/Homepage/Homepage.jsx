import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {


    return (
        <>
            <Header heading='Leo-Lov' isHomePage={true} />
            <Main />
            <Footer />
        </>
    )
};

export default Homepage;