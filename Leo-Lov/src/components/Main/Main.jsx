import Card from "../Cards/Cards";
import Section from "../Section/Section";
import styles from './Main.module.scss';

import Money from '../../assets/images/money.jpg';
import Building from '../../assets/images/building.jpg';



const Main = () => {
    const cards = [
        {
            title: 'Familieret',
            text: 'Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.',
        },
        {
            title: 'Ejendomsret',
            text: 'Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.',
        },
        {
            title: 'Konkurs',
            text: 'Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp',
        },
        {
            title: 'Selskabsret',
            text: 'Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.',
        }
    ]

    const midSections = [
        {
            heading: "Intet problem",
            text: "Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.",
            text2: "Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!",
            image: Money



        },
        {
            heading: "her bor vi",
            text: "Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.",
            text2: "Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!",
            image: Building
        }
    ]



    return (
        <>
            <div className={styles.cardWrapper}>
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
            <div className={styles.sectionWrapper}>
                {midSections.map((section, index) => (
                    <Section key={index} section={section} />
                ))}
            </div>


        </>
    )
}

export default Main;