// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(parameter) {
    const innerVariable = "Inner Variable";

    function innerFunction() {
        // Inner function can access both the parameter of outerFunction
        // and the variable declared within outerFunction
        console.log("Parameter of outerFunction:", parameter);
        console.log("Variable within outerFunction:", innerVariable);
    }


    return innerFunction;
}

const innerFunc = outerFunction("Parameter Value");


innerFunc();
