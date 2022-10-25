import { useState } from "react";

function Quote({ citation, auteur, acteur, personnage, episode, saison }) {
    const [like, setLike] = useState(0);

    return (
        <div>
            <div className="quote__profil">
                <p>{citation}</p>
                <p className="quotes__infos"> {auteur}</p>
                <p className="quotes__infos">{acteur}</p>
                <p className="quotes__infos">{personnage}</p>
                <p className="quotes__infos">{episode}</p>
                <p className="quotes__infos">{saison}</p>
                <button onClick={() => setLike(like + 1)} className="quote__btn--like">J'aime</button> <p>{like}</p>
                <button onClick={() => setLike(like - 1)} className="quote__btn--dislike">J'aime pas</button>
            </div>
        </div>


    )
}

export default Quote;