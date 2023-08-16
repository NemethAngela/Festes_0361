describe('Számítás tesztelése', () => { 
    it('Sikeres teszt 1: a oldal: 1, b oldal: 2, c oldal: 3, eredmény: 64', () => {     
        let actual = calcFelulet(1, 2, 3);
        let expected = 64;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });

    it('Sikeres teszt 2: a oldal: 2, b oldal: 3, c oldal: 4, eredmény: 160', () => {     
        let actual = calcTerfogat(2, 3, 4);
        let expected = 160;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });
});