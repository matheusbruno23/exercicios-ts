function multiply(num1:number, num2:number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number) : number{
    return num1 + num2;
}

function isEven(num:number): boolean {
    return num % 2 === 0;
}

function showResult(result:number) : void{
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

((): number | void => {
    const num1 = Number(prompt("First Number"));
    const num2 = Number(prompt("Second Number"));
    
    if(!isNaN(num1) && !isNaN(num2)){
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
    } else {
        console.log("Não é possível executar com estes valores")
    }

})();