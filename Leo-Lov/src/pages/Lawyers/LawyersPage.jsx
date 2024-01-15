import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LawyerSection from "../../components/LawyerComponent/LawyerComponent";
import money from '../../assets/images/money.jpg';
import { useEffect } from "react";

const Lawyers = () => {

    useEffect(() => {
        document.title = 'Advokaterne | Leo-Lov';

    }, []);


    const lawyers = [
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        { name: 'John Doe', title: 'Lawyer', contact: 'johndoe@example.com', image: money },
        // Add more lawyers as needed
    ];
    return (
        <>
            <Header heading='Leo-Lov' />
            <LawyerSection lawyers={lawyers} />
            <Footer />
        </>
    )
}

export default Lawyers;