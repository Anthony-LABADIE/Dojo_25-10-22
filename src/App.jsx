import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Quotelist from './components/QuoteList'
import Todolist from './components/Todolist'


const  QuotesArray = [
  {
    "citation":"J'ai toujours dit que je supportais pas les jupes ;   mais c'est l'uniforme r\u00e9glementaire, j'y suis pour rien !",
    "infos": {
      "auteur":"Alexandre Astier",
      "acteur":"Bruno Salomone",
      "personnage":"Caius Camillus",
      "saison":"Livre I ",
      "episode":" 56 : Le Dernier Empereur"
      }
  },
  {
    "citation":"(À Perceval) Rangez moi ça, débile, la table ronde, c'est pas la fête de l'artisanat !",
    "infos": {
      "auteur":"Alexandre Astier",
      "acteur":"Alexandre Astier",
      "personnage":"Arthur",
      "saison":"Livre I ",
      "episode":"De retour de Judée"
      }
  },
    {
    "citation": "(À Perceval) Rangez moi ça, débile, la table ronde, c'est pas la fête de l'artisanat !",
    "infos": {
      "auteur": "Alexandre Astier",
      "acteur": "Alexandre Astier",
      "personnage": "Arthur",
      "saison": "Livre I ",
      "episode": "De retour de Judée"
    }
  },
  {
    "citation": "(À Perceval) Rangez moi ça, débile, la table ronde, c'est pas la fête de l'artisanat !",
    "infos": {
      "auteur": "Alexandre Astier",
      "acteur": "Alexandre Astier",
      "personnage": "Arthur",
      "saison": "Livre I ",
      "episode": "De retour de Judée"
    }
  }

]

console.log(QuotesArray[0].infos.acteur);

function App() {

  return (
    <div className="App">
      <Header/>
      
      <Quotelist 
      QuotesArray={QuotesArray}
      />
      <Todolist/>
      
    </div>
  )
}

export default App
