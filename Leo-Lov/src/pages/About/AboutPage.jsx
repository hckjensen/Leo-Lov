import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import AboutSection from '../../components/About/About';

const AboutPage = () => {

    const content = {
        html: (
            <>
                <h3>Om os</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod culpa ex quam repudiandae atque voluptate officiis possimus iusto. Ipsum perferendis sit deserunt distinctio pariatur recusandae cum magnam quod eos?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magnam vitae magni inventore minus tenetur qui id quia, provident voluptas dolore facere soluta eveniet dignissimos odio voluptatum nihil porro voluptatem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur ipsa asperiores maiores? Quidem laborum voluptate sequi, voluptatum exercitationem doloribus provident asperiores officiis? Architecto rem laudantium modi ullam illo voluptate?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae doloribus inventore quibusdam ut adipisci aut quidem eos blanditiis ex deserunt, molestiae quasi minima laborum error repellat architecto illum? Adipisci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, a natus ab quaerat nemo autem vitae ratione dolores nobis voluptate molestias similique possimus, ut dolorem? Quas nobis molestias aliquam optio!</p>
            </>
        ),

    }


    return (
        <>
            <Header heading='Leo-Lov' />
            <AboutSection about={{ content: content.html }} />
            <Footer />
        </>
    )
};

export default AboutPage;