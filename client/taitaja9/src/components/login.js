import "../styles/login.css";
import React, { useState } from 'react';

const loginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openLogin = () => setIsOpen(true);
    const closeLogin = () => setIsOpen(false);



    return (
        <div>
        <button onClick={openLogin}>Login</button>
        
        {isOpen && (
            <div class="CONTAINER">
                <button onClick={closeLogin}><i class="fi fi-br-cross"></i></button>
                <h2>Kirjaudu sisään</h2>
                <div class="flex-div">  
                    <p>Nimi: </p> 
                    <input type="text"></input>
                </div>
                <div class="flex-div">
                    <p>Salasana: </p> 
                    <input type="text"></input>
                </div>
                <div class="flex-div">
                    <input type="submit">Jatka kirjautumatta</input>
                    <input type="submit"> kirjaudu sisään</input>
                </div>
            </div>
        )}
        </div>
    );
};


export default loginPopup;