export class Person{
 //   public name: string;
 //   public addres: string;

    constructor(
        public name: string, private addres: string
    ){}
}
/*
export class Hero extends Person{
     constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
     ){
        super(realName, 'CDMX')
     }
}*/
export class Hero{

   constructor(
      public alterEgo: string,
      public age: number,
      public realName: string,
      public person: Person, 
   ){}


}
 const tony = new Person('Tony Stark', 'CDMX');

const iroman = new Hero('Iroman',45,'Tony',tony);

console.log(iroman)