import { useState } from "react";

function Todolist() {
    const [message, setMessage] = useState ([]);
    const [userInput, setUserInput] = useState ("");

        const handleSubmit = event => {
            event.preventDefault();
            setUserInput("");
            setMessage ([...message,userInput]);
        };
    return(
        <div>
            <ul>
                {message.map((message, id) => (
                    <li key={id}>
                    {message}
                    </li>
                ))
                }
            </ul>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                    value={userInput}
                    onChange={event => setUserInput(event.target.value)}
                    />
                    <button>Ajouter</button> 
                </form>
            </div>
            
        </div>
    )
}
export default Todolist;