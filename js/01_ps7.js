// const employee = {
//     calcTax() {
//         console.log("The tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
// };

// karanArjun.__proto__ = employee ;

// class ToyotaCar {
//     constructor(brand, milage){
//         console.log("Create a new object");
//         this.brand = brand ;
//         this.milage = milage ;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Start");
//     }
// };

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexux",12);
// console.log(lexus);

let Data = "secret data";

class user {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log(Data);
    }
};

class admin extends user {
    constructor(name,email){
        super(name,email);  
    }

    editdata(){
        Data = "Updated information";
    }
}



let student1 = new user("Riyanshi","riyanshi@gmail.com");
let student2 = new user("Dushyant","dushyant@gmail.com");
let teacher = new admin("pratick","pratick@gmail.com");