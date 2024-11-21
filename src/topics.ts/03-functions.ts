function addNumbers(a: number,b: number){
return a+b; 
}


const addNumbersArrow = (a:number,b:number): string=>{
return `El resultado es: ${a+b}`; //Esta expresion nos ayuda ha hacer una inyeccion de una exprecion de javaScript dentro de una cadena 
}

function multiply(firstNUmber: number,secondNumber?: number,base: number= 2):number{  //El simbolo de interrogación nos dice que la variable puede no utilizarse
    return firstNUmber * base;
}
//const result: number = addNumbers(2,4);
//const result2: string = addNUmbersArrow(2,4);
//const multiplyResult : number = multiply(5);
//console.log({result,result2,multiplyResult});
 interface Character{
    name:  string;
    hp: number;
    showHp: ()=> void; //En esta linea dejamos claro que showHp es una función y no un argumento
 }


const strider:Character ={
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}
const healCHaracter = (character:Character, amount:number)=>{

    character.hp+= amount;
}
healCHaracter(strider,50);
strider.showHp();
export{};