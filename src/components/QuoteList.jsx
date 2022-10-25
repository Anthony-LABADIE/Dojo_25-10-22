import Quote from "./Quote"

function Quotelist({ QuotesArray }) {
    return (
        <div className="quoteList__container">
            {
                QuotesArray.map((element, id) => (
                    <Quote
                        key={id}
                        citation={element.citation}
                        acteur={element.infos.acteur}
                        auteur={element.infos.auteur}
                        personnage={element.infos.personnage}
                        episode={element.infos.episode}
                        saison={element.infos.saison}
                    />
                ))};
        </div>
    )
}

export default Quotelist;