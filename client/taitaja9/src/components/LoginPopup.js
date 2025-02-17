import "../styles/login.css";
import React, { useState } from 'react';



const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openLogin = () => setIsOpen(true);
    const closeLogin = () => setIsOpen(false);

    return (
        <div>

        <button onClick={openLogin} class="openLogin">Kirjaudu sisään</button>
        
        {isOpen && (
            <div class="CONTAINER">
                <div class="flex-div">
                    <h2>Kirjaudu sisään</h2>
                    <button onClick={closeLogin} class="closeLogin">&#10006;</button>
                </div>
                <div class="flex-div">  
                    <p class="contents">Nimi: </p> 
                    <input type="text"></input>
                </div>
                <div class="flex-div">
                    <p class="contents">Salasana: </p> 
                    <input type="text"></input>
                </div>
                <div class="flex-div">
                    <button class="loginBtns">Jatka kirjautumatta</button>
                    <button class="loginBtns"> kirjaudu sisään</button>
                </div>
            </div>
        )}
        </div>
    );
};


export default LoginPopup;