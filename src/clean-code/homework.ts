(() => {

    function isRedFruit( fruit: string ): boolean {
        const redFruits: string[] = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    type FruitColor ='red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColor ): string[]
    {
        const fruitByColor = {
            red : ['manzana','fresa'],
            yellow : ['piña','banana'],
            purple : ['moras','uvas']
        }

        if (!Object.keys(fruitByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple')
        }

        return fruitByColor[color];
        /*
            fruits = fruitsByColor[color];

            if (fruits) return fruits;

            throw Error('the color must be: red, yellow, purple');
        */
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if ( !isFirstStepWorking )  return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking )  return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Four step broken.';

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() });

})();



