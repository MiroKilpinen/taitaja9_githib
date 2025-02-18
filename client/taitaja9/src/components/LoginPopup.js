import "../styles/Login.css";
import React, { useState } from 'react';


const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openLogin = () => setIsOpen(true);
    const closeLogin = () => setIsOpen(false);
    const noLogin = () => setIsOpen(false);
    function Login(name, password) {
        if (name.lenght === 0 || password.lenght === 0) {
            document.getElementById().innerHTML = "Nimi tai salasana väärin.";
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
                    <input type="text" id="name" required/>
                </div>
                <div class="flex-div">
                    <p class="contents">Salasana: </p> 
                    <input type="text" id="password" required/>
                </div>
                <div class="flex-div">
                    <button class="loginBtns" onClick={noLogin}>Jatka kirjautumatta</button>
                    <button class="loginBtns" onClick={Login}> kirjaudu sisään</button>
                </div>
            </div>
        )}
        </div>
    );
};


export default LoginPopup;