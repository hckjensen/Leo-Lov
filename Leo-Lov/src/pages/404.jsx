import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => { document.title = '404 | Leo-Lov' }, []);
    return (
        <>
            <Header heading='404- Page not Found' />

            <Footer />
        </>
    )



}
export default NotFound;