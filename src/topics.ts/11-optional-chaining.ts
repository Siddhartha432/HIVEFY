export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name:'Fernando',
}

const passenger2: Passenger = {
    name: 'Luis',
    children: ['Alexander','Ximena'],
}

const printChildren = ( passanger: Passenger) =>{
    const howManyChildren = passanger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1);