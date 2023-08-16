/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-08-15
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

//Feladat: Egy pincében, adott egy téglatest alakú tartály, amely felül nyitott. Le kell festeni, ezért ki kell deríteni mekkora a felülete. 
//A festést kívül belül el kell végezni, kétszer. Kérje be a tartály három oldalának hosszát, majd számoltassa ki, a tartály felületét, majd írassa ki hány négyzetméterre kell festéket venni, kívülre és belülre, a festést kétszer kell elvégzeni.
//A téglatest felületének számítása: A = 2(ab + bc + ca)

const doc = {
    aoldalInput: document.querySelector('#aoldal'),
    boldalInput: document.querySelector('#boldal'),
    coldalInput: document.querySelector('#coldal'),
    feluletInput: document.querySelector('#felulet'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    felulet: 0,
};

window.addEventListener('load', () => {
    init();
});

function init() {       //eseménykezelő
    if (doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc();
        });
    }
}

function startCalc() {
    let aoldal = doc.aoldalInput.value;
    let boldal = doc.boldalInput.value;
    let coldal = doc.coldalInput.value;
    //let isValid = checkInput(aoldal, boldal, coldal);
    let isValid = checkInput(aoldal) && checkInput(boldal) && checkInput(coldal);

    if (isValid == true) {
        state.felulet = calcFelulet(aoldal, boldal, coldal);
        doc.feluletInput.value = state.felulet;
    }
    else {
        doc.feluletInput.value = "Nem jó input lett megadva";
    }
}
//A = 2(ab + bc + ca)
function calcFelulet(aoldal, boldal, coldal) {    
    // let ketszer_egyik_oldal = 2*aoldal*boldal;
    // let ketszer_masik_oldal = 2*aoldal*coldal;
    // let alja = boldal*coldal;
    // return 4*(ketszer_egyik_oldal + ketszer_masik_oldal + alja);

    return 4*((2*aoldal*boldal) + (2*aoldal*coldal) + (boldal*coldal));
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)) {
        if(inputNum > 0) {
            return true;
        } else {
        return false;
        }
    } else {
        return false;
    }
}