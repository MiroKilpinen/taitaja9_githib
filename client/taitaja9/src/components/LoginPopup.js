import "../styles/Login.css";
import React, { useState } from 'react';


const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    //napit
    const openLogin = () => setIsOpen(true);    
    const closeLogin = () => setIsOpen(false);
    const continueWOLogin = () => setIsOpen(false);
    
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    //tää nyt pistää Login function triggeraa kokoajan
    function handleNameChange(e) {
        setInputName(e.target.value);
      }
      function handlePasswordChange(e) {
        setInputPassword(e.target.value);
    }

    //see if it works
    function Login(inputName, inputPassword) {
        console.log(inputName);
        console.log(inputPassword);
        //setIsOpen(false); //jos tää on nyt päällä nykysessä koodissa, login ei avaudu ollenkaa, (tarkotus ois et sulkeutuu ku on kirjauduttu successfully)
    }

    return (
        <div>
        {/*button navbarissa*/}
        <button onClick={openLogin} class="openLogin">Kirjaudu sisään</button>
        
        {isOpen && (
            <div class="CONTAINER">
                <div class="flex-div">
                    <h2 class="kirjauduSisText">Kirjaudu sisään</h2>
                    <button onClick={closeLogin} class="closeLogin">&#10006;</button>
                </div>
                <div class="flex-div">  
                    <p class="contents">Nimi: </p> 
                    <input 
                    onChange={handleNameChange} 
                    id="inputName"
                    value={inputName}
                    />
                </div>
                 <div class="flex-div">
                     <p class="contents">Salasana: </p> 
                    <input 
                    onChange={handlePasswordChange} 
                    id="inputPassword"
                    value={inputPassword}
                    />
                </div>
                <div class="flex-div">
                    <button class="loginBtns" onClick={continueWOLogin}>Jatka kirjautumatta</button>{/*basically sama ku close login, mut hes here for astethic purposes :3*/}
                    <button class="loginBtns" onClick={Login(inputName, inputPassword)}> kirjaudu sisään</button>
                </div>
            </div>
        )}
        </div>
    );
};


export default LoginPopup;