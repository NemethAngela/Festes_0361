describe('Input tesztek', () => {
    it ('Szám', () => {         //ez jó a tesznél 
        let actual = checkInput(3);
        expect(actual).toBe(true);   //elvárt
    });

    it ('Szöveg', () => {         //ez már false a tesznél 
        let actual = checkInput('aa');
        expect(actual).toBe(false);   
    });
});