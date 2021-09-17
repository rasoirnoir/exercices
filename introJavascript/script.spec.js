const{
    inverseChaine,
    bonneHeure,
    tableauTaille10,
    DepositProfit,
    SumOddFiboNumber,
    CenturyFromYear,
    SortByLength,
    CountVowelConsonant,
    LargestNumber,
    NoterLesEleve,
    FizzBuzz,
    HappyNumber,
    fiveFirstHappyNumbers
} = require("./script")

describe("Function inverseChaine", () =>{
    test("Test inverseChaine", () =>{
        expect(inverseChaine("prout")).toBe("tuorp");
    })
});

describe("Function bonneHeure", ()=>{
    test("Test bonneHeure", ()=>{
        expect(bonneHeure("13:50")).toBe(false);
    })
});

describe("Function tableauTaille10", () => {
    test("Test tableauTaille10 1", () => {
        expect(tableauTaille10([1, 2, 3])).toBe(false);
    })
    test("Test tableauTaille10 2", () => {        
        expect(tableauTaille10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(true);
    })
});

describe("Finction DepositProfit", () =>{
    test("Test DepositProfit 1", () => {
        expect(DepositProfit(100, 20, 170)).toBe(3);
    })
});

describe("Function SumOddFiboNumber", () =>{
    test("Test SumOddFiboNumber 1", () =>{
        expect(SumOddFiboNumber(10)).toBe(10);
    })
    test("Test SumOddFiboNumber 2", () =>{
        expect(SumOddFiboNumber(1000)).toBe(1785);
    })
    test("Test SumOddFiboNumber 3", () =>{
        expect(SumOddFiboNumber(4000000)).toBe(4613732);
    })
});

describe("Function CenturyFromYear", () =>{
    test("Test CenturyFromYear 1", () =>{
        expect(CenturyFromYear(1905)).toBe(20);
    })
    test("Test CenturyFromYear 2", () =>{
        expect(CenturyFromYear(1700)).toBe(17);
    })
})

describe("Function SortByLength", () => {
    test("Test SortByLength", () =>{
        expect(SortByLength(["abc", "", "aaa", "a", "zz"])).toEqual(["", "a", "zz", "abc", "aaa"]);
    })
})

describe("Function CountVowelConsonant", () =>{
    test("Test CountVowelConsonant", () =>{
        expect(CountVowelConsonant("abcde")).toBe(8);
    })
})

describe("Function LargestNumber", () =>{
    test("Test LargestNumber", () =>{
        expect(LargestNumber()).toBe(29);
    })
})

describe("Function NoterLesEleve", () =>{
    test("Test NoterLesEleve", () =>{
        expect(NoterLesEleve()).toEqual([{
            'Prénom' : 'Luna',
            'Point' : 73,
            'Note' : 'C'
          },
          {
            'Prénom' : 'Joe',
            'Point' : 80,
            'Note' : 'B'
          },
          {
            'Prénom' : 'Thomas',
            'Point' : 79,
            'Note' : 'C'
          },
          {
            'Prénom' : 'Raman',
            'Point' : 45,
            'Note' : 'E'
          },
          {
            'Prénom' : 'Alexandra',
            'Point' : 92,
            'Note' : 'A'
          },
          {
            'Prénom' : 'Jeanne',
            'Point' : 42,
            'Note' : 'E'
          }]);
    })
})

describe('Function FizzBuzz', () => {
    xtest("Test FizzBuzz", () => {
        expect(FizzBuzz()).toBe();
    })
});

describe('Function HappyNumber', () => {
    test("Test HappyNumber 1", () => {
        expect(HappyNumber(7)).toBe(true);
    })
    test("Test HappyNumber 2", () => {
        expect(HappyNumber(31)).toBe(true);
    })
    test("Test HappyNumber 3", () => {
        expect(HappyNumber(8)).toBe(false);
    })
    test("Test HappyNumber 4", () => {
        expect(HappyNumber(21)).toBe(false);
    })
})

describe("Fonction fiveFirstHappyNumbers", () => {
    test("Test fiveFirstHappyNumbers", () => {
        expect(fiveFirstHappyNumbers()).toEqual([1, 7, 10, 13, 19]);
    })
})