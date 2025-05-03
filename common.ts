
let x:any=2;
const username:string="lorem";
let age:number=33;

function checkSum(x:number,y:number):number{ return x+y }

type StringArray=Array<string>;
type NumberArray=Array<number>;
type CarsData=Array<{name:string, type:string, price:number}>;


interface Car{ name:string, power:number, hybrid:boolean };
// const swift:Car={ name:"swift", power:82, hybrid:false };
// const grandvitara:Car={name:"grand vitara", power:115, hybrid:true};

// const cars:StringArray=["swift","baleno","brezza"];
// const marks:NumberArray=[33,45,42,37,38];

// const carsdata:CarsData=[
//     {name: "swift", type: "hatchback", price:870000},
//     {name: "dzire", type: "sedan", price:980000},
//     {name: "ciaz", type: "sedan", price:1100000},
//     {name: "baleno", type: "hatchback", price:880000},
//     {name: "fronx", type: "hatchback", price:1150000},
//     {name: "brezza", type: "suv", price:1250000},
//     {name: "grand vitara", type: "suv", price:1990000},
//     {name: "alto", type: "hatchback", price:400000},
//     {name: "wagon r", type: "hatchback", price:500000},
//     {name: "jimny", type: "suv", price:1400000}
// ];


class Car{
    
   public emission:string="bs6";
   private id:string="msind";

    constructor( public name:string, public power:number, public price:number ){
        this.name=name;
        this.power=power;
        this.price=price;
    }

    get checkId(){ return this.id };

};

/* inherited propperties */
Car.prototype.parent="Maruti Suzuki";
Car.prototype.pid=212;


/* instance (objects) */
const swift=new Car("swift",82,900000);
const alto=new Car("alto",66,500000);


const brezza={name:"brezza", power:103};
const ciaz={name:"ciaz", power:103};


console.log( swift);
// console.log( swift.name );
// console.log( swift.power );

// console.log( swift.parent );
// console.log( swift.name );

// console.log( swift.emission);
// console.log( swift.id);                          // not allowed, its private
console.log( swift.checkId );


// for( let i in swift ){ console.log(i) }
// for( let i of Object.entries(swift) ){ console.log(i) }


