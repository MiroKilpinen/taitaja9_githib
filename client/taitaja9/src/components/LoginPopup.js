import "../styles/Login.css";
import React, { useState } from 'react';


const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openLogin = () => setIsOpen(true);
    const closeLogin = () => setIsOpen(false);
    const continueWOLogin = () => setIsOpen(false);
    
    function Login(inputName, inputPassword) {
        console.log(inputName);
        if (inputName.lenght < 0 && inputPassword.lenght < 0) {
            console.log("ei voi olla tyhjä dumbass");
        } else if (inputName === undefined && inputPassword === undefined) {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaargh");
        } else {
            console.log("kirjauduttu or smth");
        }
    }

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
                    <input id="inputName" name="inputName"/>
                </div>
                 <div class="flex-div">
                     <p class="contents">Salasana: </p> 
                    <input id="inputPassword" name="inputPassword"/>
                </div>
                <div class="flex-div">
                    <button class="loginBtns" onClick={continueWOLogin}>Jatka kirjautumatta</button>
                    <button class="loginBtns" onClick={Login}> kirjaudu sisään</button>
                </div>
            </div>
        )}
        </div>
    );
};


export default LoginPopup;